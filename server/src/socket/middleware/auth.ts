import { ISocket } from '../../interfaces'

export const verify = (socket: ISocket, next: any): void => {
  // eslint-disable-next-line no-param-reassign
  socket.username = socket.handshake.query.name
  // eslint-disable-next-line no-param-reassign
  socket.color = '#93FFA4'
  next()
}
