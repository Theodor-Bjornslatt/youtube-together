import { ISocket } from '../../interfaces'
import { getIo } from '../io'
import { idGenerator } from '../../util'
import { Message } from '../../api/models'

interface SocketData {
  room: string
  msg: string
}
export async function onChatMessage(
  this: ISocket,
  data: SocketData
): Promise<void> {
  const message = {
    username: this.username,
    msg: data.msg,
    timestamp: Date.now(),
    id: idGenerator(),
    color: this.color
  }

  const io = getIo()
  io.to(data.room).emit('chat', message)

  const msg = new Message({ room: data.room, ...message })
  await msg.save()
}
