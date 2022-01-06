import { Socket } from 'socket.io'

import log from '../../logger'
import { getIo } from '../io'

export function onDisconnect(this: Socket): void {
  const io = getIo()
  log.info(`${this.data.username} disconnected`)
  this.rooms.forEach((room) => {
    io.to(room).emit('leave-room', this.data.username)
  })
}
