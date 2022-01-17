import { Socket } from 'socket.io'

import { Message } from '../../api/models'
import { Room } from '../../api/models/room.model'
import { IClient, IData } from '../../interfaces'
import log from '../../logger'
import { getIo } from '../io'

const getOnlineUsers = (room: string) => {
  const io = getIo()
  const clients = io.sockets.adapter.rooms.get(room)
  const users: Array<IClient> = []

  clients?.forEach((id: string) => {
    const clientSocket = <Socket>io.sockets.sockets.get(id)
    users.push({
      username: clientSocket.data.username,
      color: clientSocket.data.color
    })
  })
  return users
}

const joinRoom = (socket: Socket, room: string, users: Array<IClient>) => {
  const alreadyJoined = users.some((user) => {
    return user.username === socket.data.username
  })

  if (!alreadyJoined) {
    socket.join(room)
    socket.to(room).emit('joined-room', {
      username: socket.data.username,
      color: socket.data.color
    })
  }
}

const getCurrentStateInRoom = async (room: string) => {
  const messages = await Message.find({ room })
    .limit(10)
    .skip(0)
    .select('-_id -room -__v')
  const { playlist } = await Room.findOne({ name: room }).select('playlist')
  return { messages, playlist }
}

export async function onJoinRoom(this: Socket, data: IData): Promise<void> {
  const t1 = performance.now()

  const {
    room,
    username = `Guest#${(Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1)}`,
    color = '#ffff'
  } = data
  const io = getIo()

  this.data.username = username
  this.data.color = color

  const { messages, playlist } = await getCurrentStateInRoom(room)
  const users = getOnlineUsers(room)

  joinRoom(this, room, users)

  io.to(this.id).emit('pre-room', {
    users: users.filter((user) => {
      return user.username !== username
    }),
    messages,
    playlist
  })

  // measure speed
  const t2 = performance.now()
  log.info(`${t2 - t1} milliseconds to join a room`)
}

export function onLeaveRoom(this: Socket, room: string): void {
  const io = getIo()
  this.leave(room)
  io.to(room).emit('leave-room', this.data.username)
}
