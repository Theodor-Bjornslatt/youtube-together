import { Server } from 'http'
import socketio from 'socket.io'

import { ISocket } from '../interfaces'
import { SOCKET_EVENT as EVENT } from '../config'
import startSockets from './controller'

export const initSocket = (server: Server): void => {
  const io: socketio.Server = new socketio.Server({
    allowEIO3: true,
    cors: {
      origin: true,
      credentials: true
    }
  })
  io.attach(server)

  io.use((socket: ISocket, next) => {
    // eslint-disable-next-line no-param-reassign
    socket.name = socket.handshake.query.name
    next()
  })

  io.on(EVENT.INIT, startSockets)
}
