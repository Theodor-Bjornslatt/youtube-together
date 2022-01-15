import { getIo } from '../io'

interface SocketData {
  room: string
  status: number
}

export function onStatusChange(data: SocketData): void {
  const { room, status } = data
  const io = getIo()
  io.to(room).emit('status', status)
}
