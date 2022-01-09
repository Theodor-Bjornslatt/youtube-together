import { BadRequest } from '../../errors'
import { IRoom, IRoomObject } from '../../interfaces'
import { getIo } from '../../socket/io'
import { validateRoom } from '../../validation/playlist'
import { Room } from '../models/room.model'

export const getAllRooms = async (): Promise<IRoomObject> => {
  const io = getIo()
  const rooms = await Room.find()

  return {
    rooms: rooms.map((room) => {
      const clients = io.sockets.adapter.rooms.get(room.name)
      return {
        id: room._id,
        name: room.name,
        online: clients?.size || 0,
        nickname: room.nickname,
        playlist: room.playlist
      }
    })
  }
}

export const getRoomByName = async (name: string): Promise<IRoom> => {
  if (!name) throw new BadRequest('Missing params')
  const room = await Room.findOne({ name })

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
