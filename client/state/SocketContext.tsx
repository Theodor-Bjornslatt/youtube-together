import { createContext, useContext, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'

type Context = {
  socket: Socket
  username?: string
  messages?: { message: string; timestamp: number; username: string }[]
  setMessages: (data: MessageData) => void
  roomId?: string
  rooms: object
}

export type MessageData = {
  username: string
  message: string
  timestamp: number
  id?: string
  color?: string
  room?: string
}

const socket = io('http://localhost:8080')

const SocketContext = createContext<Context>({
  socket,
  setMessages: () => null,
  rooms: {},
  messages: []
})

function SocketsProvider(props: any) {
  const [messages, setMessages] = useState<MessageData[]>([])

  useEffect(() => {
    socket.on('chat', (data: MessageData) => {
      setMessages((messages) => [...messages, data])
    })
  }, [socket])

  return (
    <SocketContext.Provider
      value={{
        socket,
        messages,
        setMessages
      }}
      {...props}
    />
  )
}

export const useSockets = () => useContext(SocketContext)

export default SocketsProvider
