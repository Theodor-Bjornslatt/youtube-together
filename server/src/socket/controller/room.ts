import { ISocket } from '../../interfaces'
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

export async function onJoinRoom(this: ISocket, data: IData): Promise<void> {
  const io = getIo()
  const { room, username, color } = data

  this.username = username || 'Guest'
  this.color = color || '#ffff'

  const messages = await Message.find({ room })
  const clients = io.sockets.adapter.rooms.get(room)
  const users: Array<IClient> = []

  clients?.forEach((id: string) => {
    const clientSocket = <ISocket>io.sockets.sockets.get(id)
    users.push({ username: clientSocket.username, color: clientSocket.color })
  })

  this.join(room)
  io.to(this.id).emit('state', { users, messages })

  log.info(`${this.username} joined ${room}`)
}

export function onLeaveRoom(this: ISocket, room: string): void {
  this.leave(room)
  this.to(room).emit(`${this.username} leaved ${room}`)
}
