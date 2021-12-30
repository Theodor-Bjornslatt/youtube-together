import { ISocket } from '../../interfaces'
// eslint-disable-next-line import/no-cycle
import { getIo } from '../socket'
import { idGenerator } from '../../util'

interface SocketData {
  room: string
  msg: string
}
export function onChatMessage(this: ISocket, data: SocketData): void {
  const message = {
    user: this.name,
    msg: data.msg,
    timestamp: Date.now(),
    id: idGenerator(),
    color: '#93FFA4'
  }

  const io = getIo()
  io.to(data.room).emit('chat', message)
}
