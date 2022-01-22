import { Socket } from 'socket.io'

import { getRedis } from '../../db'

interface ISocketStatus {
  type: string
  event?: number
  timestamp?: number
}
interface SocketData {
  room: string
  status: ISocketStatus
}
const redis = getRedis()
export async function onStatusChange(
  this: Socket,
  data: SocketData
): Promise<void> {
  const { room, status } = data
  const host = await redis.get(room)
  if (host !== this.data.username) return
  this.broadcast.to(room).emit('status', status)
}
