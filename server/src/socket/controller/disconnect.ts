import { Socket } from 'socket.io'

import log from '../../logger'

export function onDisconnect(this: Socket): void {
  log.info(`${this.data.username} disconnected`)
  this.rooms.forEach((room) => {
    this.to(room).emit(`${this.data.username} leaved ${room}`)
  })
}
