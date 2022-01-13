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

export const getAllRooms = async ({
  limit,
  page
}: IQueryProp): Promise<IRoomObject> => {
  const parsedLimit = limit && parseInt(limit, 10)
  const parsedPage = page && parseInt(page, 10)

  const defaultLimit = parsedLimit || 10
  const defaultPage = parsedPage || 1

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
  const parsedRandom = random && parseInt(random, 10)
  if (parsedRandom && !name) {
    const defaultRandom = parsedRandom > 10 ? 10 : parsedRandom
    const messages = await Message.aggregate([
      { $sample: { size: defaultRandom } }
    ])

    return {
      messages,
      query: { random: parsedRandom }
    }
  }

  const parsedLimit = limit && parseInt(limit, 10)
  const parsedPage = page && parseInt(page, 10)
  const defaultLimit = parsedLimit || 10
  const defaultPage = parsedPage || 1

  if (!name) throw new BadRequest('Specify name')

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

  // TODO - to generic
  if (updatedRoom.modifiedCount === 0) throw new Error()
}

export const updatePlaylist = async ({
  name,
  item
}: IQueryProp): Promise<void> => {
  if (!name) throw new BadRequest('Params missing')
  await validatePlaylistItem(item)

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
