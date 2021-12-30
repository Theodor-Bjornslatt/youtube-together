import { Server } from 'http'
import socketio from 'socket.io'

import { ISocket } from '../interfaces'
import { SOCKET_EVENT as EVENT } from '../config'
// eslint-disable-next-line import/no-cycle
import onConnect from './controller'

let socketIO: socketio.Server

export const getIo = (): socketio.Server => {
  if (!socketIO) {
    socketIO = new socketio.Server({
      allowEIO3: true,
      cors: {
        origin: true,
        credentials: true
      }
    })
  }
  return socketIO
}
export const initSocket = (server: Server): void => {
  const io = getIo()
  io.attach(server)

  io.use((socket: ISocket, next) => {
    // eslint-disable-next-line no-param-reassign
    socket.username = socket.handshake.query.name
    // eslint-disable-next-line no-param-reassign
    socket.color = '#93FFA4'
    next()
  })

  io.on(EVENT.INIT, onConnect)
}
