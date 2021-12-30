import { ISocket } from '../../interfaces'

interface SocketData {
  room: string
  msg: string
}
export function onChatMessage(this: ISocket, data: SocketData): void {
  const obj = {
    user: this.name,
    msg: data.msg,
    timestamp: Date.now()
  }

  this.emit('chat', obj)
}
