import { Socket } from 'socket.io'

import { Message } from '../../api/models'
import { IClient, IData } from '../../interfaces'
import log from '../../logger'
import { getIo } from '../io'

export async function onJoinRoom(this: Socket, data: IData): Promise<void> {
  const {
    room: roomToJoin,
    username = `Guest#${(Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1)}`,
    color = '#ffff'
  } = data
  const room = `#${roomToJoin}`
  const io = getIo()

  this.data.username = username
  this.data.color = color

  const messages = await Message.find({ room })
  const clients = io.sockets.adapter.rooms.get(room)
  const users: Array<IClient> = []

  clients?.forEach((id: string) => {
    const clientSocket = <Socket>io.sockets.sockets.get(id)
    users.push({
      username: clientSocket.data.username,
      color: clientSocket.data.color
    })
  })

  this.join(room)
  io.to(this.id).emit('pre-room', { users, messages })
  this.to(room).emit('joined-room', { username, color })
  log.info(`${this.data.username} joined ${room}`)
}

export function onLeaveRoom(this: Socket, room: string): void {
  const roomToLeave = `#${room}`
  this.leave(roomToLeave)
  this.to(room).emit(`${this.data.username} left ${roomToLeave}`)
}
