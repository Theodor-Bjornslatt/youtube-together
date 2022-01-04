import { Socket } from 'socket.io'

import { Message } from '../../api/models'
import log from '../../logger'
import { getIo } from '../io'

interface IClient {
  username: string | string[] | undefined
  color: string | string[] | undefined
}

interface IData extends IClient {
  room: string
}

export async function onJoinRoom(this: Socket, data: IData): Promise<void> {
  const io = getIo()
  const { room, username, color } = data

  this.data.username = username || 'Guest'
  this.data.color = color || '#ffff'

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
  io.to(this.id).emit('state', { users, messages })

  log.info(`${this.data.username} joined ${room}`)
}

export function onLeaveRoom(this: Socket, room: string): void {
  this.leave(room)
  this.to(room).emit(`${this.data.username} leaved ${room}`)
}
