import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import io, { Socket } from 'socket.io-client'

import { User } from './GlobalState'

type Context = {
  socket: Socket | undefined
  username?: string
  messages?: MessageData[]
  playlist?: PlaylistData[]
  activeUsers?: User[]
  setMessages: Dispatch<SetStateAction<MessageData[]>>
  setPlaylist: Dispatch<SetStateAction<PlaylistData[]>>
  cleanUpSocketStates: () => void
  roomId?: string
  host: string
}

type RoomStateData = {
  messages: MessageData[]
  users: User[]
  playlist: PlaylistData[]
  host: string
}

type LeaveStateData = {
  user: string
  newHost: string
}

export type MessageData = {
  username: string
  message: string
  timestamp: number
  id?: string
  color?: string
  room?: string
}

export type PlaylistData = {
  _id?: string | number
  url: string
  title: string
}

const socket =
  typeof window === 'undefined' ? undefined : io('http://localhost:8080/')

const SocketContext = createContext<Context>({
  socket,
  setMessages: () => null,
  setPlaylist: () => null,
  cleanUpSocketStates: () => null,
  messages: [],
  playlist: [],
  host: ''
})
type SocketProviderProps = {
  isLoggedIn: boolean
  children: JSX.Element[] | JSX.Element
}

function SocketsProvider({ children }: SocketProviderProps) {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [playlist, setPlaylist] = useState<PlaylistData[]>([])
  const [activeUsers, setActiveUsers] = useState<User[]>([])
  const [host, setHost] = useState('')

  useEffect(() => {
    if (!socket) return

    socket.on('chat', (data: MessageData) => {
      setMessages((messages) => [...messages, data])
    })

    socket.on('status', (data: number) => {
      console.log('Playing = 1, Paus = 2')
      console.log(data)
    })

    socket.on('pre-room', (data: RoomStateData) => {
      // console.log('data :>> ', data)
      setMessages((messages) => [...messages, ...data.messages])
      setActiveUsers((users) => [...users, ...data.users])
      setPlaylist((playlist) => [...playlist, ...data.playlist])
      setHost(data.host)
    })

    socket.on('joined-room', (data: User) => {
      setActiveUsers((users) => [...users, data])
    })

    socket.on('leave-room', (data: LeaveStateData) => {
      setActiveUsers((users) =>
        users.filter(({ username }) => username !== data.user)
      )
      setHost(data.newHost)
    })

    function cleanup() {
      if (!socket) return
      socket.disconnect()
    }
    return cleanup
  }, [socket])

  const cleanUpSocketStates = (): void => {
    setPlaylist([])
    setMessages([])
    setActiveUsers([])
  }

  return (
    <SocketContext.Provider
      value={{
        socket,
        messages,
        playlist,
        activeUsers,
        host,
        setMessages,
        setPlaylist,
        cleanUpSocketStates
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export const useSockets = () => useContext(SocketContext)

export default SocketsProvider
