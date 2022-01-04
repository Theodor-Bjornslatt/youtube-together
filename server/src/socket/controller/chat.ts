import { Socket } from 'socket.io'

import { getIo } from '../io'
import { idGenerator } from '../../util'
import { Message } from '../../api/models'

interface SocketData {
  room: string
  message: string
}
export async function onChatMessage(
  this: Socket,
  data: SocketData
): Promise<void> {
  const message = {
    username: this.data.username,
    message: data.message,
    timestamp: Date.now(),
    id: idGenerator(),
    color: this.data.color
  }
  const io = getIo()
  io.to(data.room).emit('chat', message)
  const msg = new Message({ room: data.room, ...message })
  await msg.save()
}
