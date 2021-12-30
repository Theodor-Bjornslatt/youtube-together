import { ISocket } from '../../interfaces'
import log from '../../logger'

export function onDisconnect(this: ISocket): void {
  log.info(`${this.username} disconnected`)
  this.rooms.forEach((room) => {
    this.to(room).emit(`${this.username} leaved ${room}`)
  })
}
