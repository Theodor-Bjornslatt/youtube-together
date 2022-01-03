import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

type UserData = {
  username: string
  color: string
}
export const useSocket = (url: string, UserData: UserData) => {
  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect(() => {
    const socketIo = io(url, { query: UserData })

    setSocket(socketIo)

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup

    // should only run once and not on every re-render,
  }, [])

  return socket
}
