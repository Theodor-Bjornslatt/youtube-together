import { BadRequest } from '../../errors'
import { IRoom, IRoomObject, IMessage } from '../../interfaces'
import { getIo } from '../../socket/io'
import { validateRoom } from '../../validation/playlist'
import { Message } from '../models'
import { Room } from '../models/room.model'

interface IQueryProp {
  limit?: string
  page?: string
  name?: string
}

interface IMessageObject {
  messages: IMessage[]
  limit: number
  page: number
  room: string
}

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
        cover: youtubeId
          ? coverImage
          : 'https://cdn.vox-cdn.com/thumbor/LXvoCd3sbTvxMUpVAd-f4ArjYRA=/0x0:1920x800/1820x1024/filters:focal(694x265:1000x571):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69582511/lotr1_movie_screencaps.com_12025.0.jpg'
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
  page
}: IQueryProp): Promise<IMessageObject> => {
  if (!name) throw new BadRequest('Specify name')

  const parsedLimit = limit && parseInt(limit, 10)
  const parsedPage = page && parseInt(page, 10)

  const defaultLimit = parsedLimit || 10
  const defaultPage = parsedPage || 1

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
