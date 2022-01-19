import { Socket } from 'socket.io'

import { onJoinRoom, onLeaveRoom } from './room'
import { onDisconnect } from './disconnect'
import { onChatMessage } from './chat'
import { onStatusChange } from './video'
import { onPlaylistChange } from './playlist'
import { SOCKET_EVENT as EVENT } from '../../config'

export default function start(socket: Socket): void {
  socket.on(EVENT.JOIN, onJoinRoom)
  socket.on(EVENT.LEAVE, onLeaveRoom)
  socket.on(EVENT.DISCONNECT, onDisconnect)
  socket.on(EVENT.CHAT, onChatMessage)
  socket.on(EVENT.STATUS, onStatusChange)
  socket.on(EVENT.PLAYLIST, onPlaylistChange)
}
