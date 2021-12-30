import { Server } from 'http'
import socketIo from 'socket.io'

import { SOCKET_EVENT as EVENT } from '../config'
// eslint-disable-next-line import/no-cycle
import onConnect from './controller'
import { verify } from './middleware'

let socketIO: socketIo.Server

export const getIo = (): socketIo.Server => {
  if (!socketIO) {
    socketIO = new socketIo.Server({
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

  io.use(verify)

  io.on(EVENT.INIT, onConnect)
}
