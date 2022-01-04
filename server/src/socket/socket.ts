import { Server } from 'http'

import { SOCKET_EVENT as EVENT } from '../config'
import { getIo } from './io'
import onConnect from './controller'

export const initSocket = (server: Server): void => {
  const io = getIo()
  io.attach(server)
  // io.use(verify)
  io.on(EVENT.INIT, onConnect)
}
