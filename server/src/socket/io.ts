import socketIo from 'socket.io'

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
