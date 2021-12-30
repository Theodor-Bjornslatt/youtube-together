import { ISocket } from '../../interfaces'
import { Message } from '../../api/models'
import log from '../../logger'
import { getIo } from '../io'

interface IClient {
  username: string | string[] | undefined
  color: string | string[] | undefined
}

export async function onJoinRoom(this: ISocket, room: string): Promise<void> {
  const io = getIo()

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
