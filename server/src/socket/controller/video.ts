import { Socket } from 'socket.io'

interface ISocketStatus {
  type: string
  event?: number
  timestamp?: number
}
interface SocketData {
  room: string
  status: ISocketStatus
}

export function onStatusChange(this: Socket, data: SocketData): void {
  const { room, status } = data
  this.broadcast.to(room).emit('status', status)
}
