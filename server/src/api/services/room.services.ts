import { BadRequest } from '../../errors'
import { getIo } from '../../socket/io'
import { Message } from '../models'
import { IPlayList, IRoom, IRoomObject, IMessage } from '../../interfaces'
import { validatePlaylistItem, validateRoom } from '../../validation/playlist'
import { Room } from '../models/room.model'

interface IQueryProp {
  limit?: string
  page?: string
  name?: string
  item?: IPlayList
  random?: string
}

interface IParsedQuery {
  name?: string
  defaultLimit: number
  defaultPage: number
}

interface IMessageObject {
  messages: IMessage[]
  limit?: number
  page?: number
  room?: string
  name?: string
  list?: string[]
  query?: { [key: string]: string | number }
}

const DEFAULT_COVER =
  'https://cdn.vox-cdn.com/thumbor/LXvoCd3sbTvxMUpVAd-f4ArjYRA=/0x0:1920x800/1820x1024/filters:focal(694x265:1000x571):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69582511/lotr1_movie_screencaps.com_12025.0.jpg'

const parseQuery = ({ limit, page, random }: IQueryProp) => {
  const parsedLimit = limit && parseInt(limit, 10)
  const parsedPage = page && parseInt(page, 10)
  const parsedRandom = random && parseInt(random, 10)
  const defaultLimit = parsedLimit || 10
  const defaultPage = parsedPage || 1

  return { defaultLimit, defaultPage, parsedRandom }
}

const getRandomMessages = async (
  defaultRandom: number
): Promise<IMessageObject> => {
  const messages = await Message.aggregate([
    { $sample: { size: defaultRandom } }
  ])

  return {
    messages: messages.map(({ __v, _id, ...message }) => {
      return message
    }),
    query: { random: defaultRandom }
  }
}

const getQueriedMessages = async ({
  name,
  defaultLimit,
  defaultPage
}: IParsedQuery): Promise<IMessageObject> => {
  if (!name)
    throw new BadRequest('Specify name of the room where you want the messages')

  const messages = await Message.find({ room: name })
    .limit(defaultLimit)
    .skip((defaultPage - 1) * defaultLimit)
    .select('-_id -room -__v')

  return {
    messages,
    room: name,
    limit: defaultLimit,
    page: defaultPage
  }
}

export const getAllRooms = async ({
  limit,
  page
}: IQueryProp): Promise<IRoomObject> => {
  const { defaultLimit, defaultPage } = parseQuery({ limit, page })

  const io = getIo()
  const rooms = await Room.find()
    .limit(defaultLimit)
    .skip((defaultPage - 1) * defaultLimit)

  return {
    rooms: rooms.map((room) => {
      const clients = io.sockets.adapter.rooms.get(room.name)
      const youtubeId = room.playlist[0]?.url.split('v=')[1]
      const coverImage = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      return {
        id: room._id,
        name: room.name,
        online: clients?.size || 0,
        nickname: room.nickname,
        playlist: room.playlist,
        cover: youtubeId ? coverImage : DEFAULT_COVER
      }
    }),
    limit: defaultLimit,
    page: defaultPage
  }
}

export const getRoomByName = async (name: string): Promise<IRoom> => {
  if (!name) throw new BadRequest('Missing params')
  const room = await Room.findOne({ name }).select('name -_id')

  return room || { size: 0 }
}

export const postRoom = async (body: IRoom): Promise<IRoom> => {
  const { name, playlist, nickname } = body
  await validateRoom({ name, playlist })

  const room = new Room({
    name,
    playlist,
    nickname
  })

  const savedRoom = await room.save()
  return savedRoom
}

export const getMessages = async ({
  name,
  limit,
  page,
  random
}: IQueryProp): Promise<IMessageObject> => {
  const { defaultLimit, defaultPage, parsedRandom } = parseQuery({
    limit,
    page,
    random
  })

  const response =
    parsedRandom && !name
      ? await getRandomMessages(parsedRandom)
      : await getQueriedMessages({ name, defaultLimit, defaultPage })

  return response
}

export const addToPlaylist = async ({
  name,
  item
}: IQueryProp): Promise<void> => {
  if (!name) throw new BadRequest('Params missing')
  await validatePlaylistItem(item)

  const updatedRoom = await Room.updateOne(
    { name },
    {
      $push: {
        playlist: item
      }
    }
  )

  // TODO - too generic
  if (updatedRoom.modifiedCount === 0) throw new Error()
}

export const updatePlaylist = async ({
  name,
  item
}: IQueryProp): Promise<void> => {
  if (!name) throw new BadRequest('Params missing')

  await Room.updateOne(
    { name },
    {
      $pull: {
        playlist: { _id: item?._id }
      }
    }
  )

  await Room.updateOne(
    { name },
    {
      $push: {
        playlist: { $each: [item], $position: item?.position }
      }
    }
  )
}
