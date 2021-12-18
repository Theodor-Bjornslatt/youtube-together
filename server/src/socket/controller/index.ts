import { ISocket } from '../../interfaces'
import { onJoinRoom, onLeaveRoom } from './room'
import { onDisconnect } from './disconnect'
import { SOCKET_EVENT as EVENT } from '../../config'
import log from '../../logger'

export default function start(socket: ISocket): void {
  log.info(`${socket.name} connected`)

  socket.on(EVENT.JOIN, onJoinRoom)
  socket.on(EVENT.LEAVE, onLeaveRoom)
  socket.on(EVENT.DISCONNECT, onDisconnect)
}
