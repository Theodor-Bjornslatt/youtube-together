import { ISocket } from '../../interfaces'

export const verify = (socket: ISocket, next: () => void): void => {
  // eslint-disable-next-line no-param-reassign
  socket.username = socket.handshake.query.username
  // eslint-disable-next-line no-param-reassign
  socket.color = '#93FFA4'
  next()
}
