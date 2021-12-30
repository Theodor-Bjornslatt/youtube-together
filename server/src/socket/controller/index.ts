import { ISocket } from '../../interfaces'
import { onJoinRoom, onLeaveRoom } from './room'
import { onDisconnect } from './disconnect'
// eslint-disable-next-line import/no-cycle
import { onChatMessage } from './chat'
import { SOCKET_EVENT as EVENT } from '../../config'
import log from '../../logger'

export default function start(socket: ISocket): void {
  log.info(`${socket.username} connected`)

  socket.on(EVENT.JOIN, onJoinRoom)
  socket.on(EVENT.LEAVE, onLeaveRoom)
  socket.on(EVENT.DISCONNECT, onDisconnect)
  socket.on(EVENT.CHAT, onChatMessage)
}
