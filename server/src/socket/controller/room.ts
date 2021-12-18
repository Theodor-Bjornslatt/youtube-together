import { ISocket } from '../../interfaces'
import log from '../../logger'

export function onJoinRoom(this: ISocket, room: string): void {
  this.join(room)
  log.info(`${this.name} joined ${room}`)
}

export function onLeaveRoom(this: ISocket, room: string): void {
  this.leave(room)
  this.to(room).emit(`${this.name} leaved ${room}`)
}
