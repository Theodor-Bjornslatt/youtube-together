import { ISocket } from '../../interfaces'
import log from '../../logger'

export function onJoinRoom(this: ISocket, room: string): void {
  this.join(room)
  log.info(`${this.username} joined ${room}`)
}

export function onLeaveRoom(this: ISocket, room: string): void {
  this.leave(room)
  this.to(room).emit(`${this.username} leaved ${room}`)
}
