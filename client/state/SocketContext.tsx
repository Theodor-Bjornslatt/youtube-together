import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'
import io, { Socket } from 'socket.io-client'

import { MovedItemInfo, SocketStatus, PlaylistItemData } from '../types'
import { User } from './GlobalState'

type Context = {
  socket: Socket | undefined
  username?: string
  messages?: MessageData[]
  playlist?: PlaylistItemData[]
  activeUsers?: User[]
  itemToMove: MovedItemInfo
  setMessages: Dispatch<SetStateAction<MessageData[]>>
  setPlaylist: Dispatch<SetStateAction<PlaylistItemData[]>>
  updatePlaylistOrder: (event: 'next' | 'previous') => void
  cleanUpSocketStates: () => void
  roomId?: string
  host: string
  status: SocketStatus
  timestamp: number
  setTimestamp: Dispatch<SetStateAction<number>>
}

type RoomStateData = {
  messages: MessageData[]
  users: User[]
  playlist: PlaylistItemData[]
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

const socket =
  typeof window === 'undefined' ? undefined : io('http://localhost:8080/')

const SocketContext = createContext<Context>({
  socket,
  setMessages: () => null,
  setPlaylist: () => null,
  updatePlaylistOrder: () => null,
  cleanUpSocketStates: () => null,
  itemToMove: {},
  messages: [],
  playlist: [],
  host: '',
  status: {},
  timestamp: 0,
  setTimestamp: () => null
})

type SocketProviderProps = {
  children: JSX.Element[] | JSX.Element
}

function SocketsProvider({ children }: SocketProviderProps) {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [playlist, setPlaylist] = useState<PlaylistItemData[]>([])
  const [activeUsers, setActiveUsers] = useState<User[]>([])
  const [status, setStatus] = useState<SocketStatus>({})
  const [host, setHost] = useState('')
  const [timestamp, setTimestamp] = useState(0)
  const [itemToMove, setItemToMove] = useState({})

  function updatePlaylistOrder(event: 'next' | 'previous') {
    const sortPlaylist = (
      previousList: PlaylistItemData[],
      event: 'next' | 'previous'
    ) => {
      let newList: PlaylistItemData[]
      if (event === 'next') {
        newList = [...previousList]
        const item = newList.shift()
        item && newList.push(item)
      } else {
        newList = [...previousList]
        const item = newList.pop()
        item && newList.unshift(item)
      }
      return newList
    }
    setPlaylist((old) => sortPlaylist(old, event))
  }

  useEffect(() => {
    if (!socket) return

    socket.on('chat', (data: MessageData) => {
      setMessages((messages) => [...messages, data])
    })

    socket.on('status', (data: SocketStatus) => {
      setStatus(data)
    })

    socket.on('pre-room', (data: RoomStateData) => {
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

    socket.on('nextVideo', () => {
      updatePlaylistOrder('next')
    })

    socket.on('previousVideo', () => {
      updatePlaylistOrder('previous')
    })

    socket.on('newPlaylistOrder', (movedItemInfo: MovedItemInfo) => {
      setItemToMove(movedItemInfo)
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
        itemToMove,
        host,
        setMessages,
        setPlaylist,
        updatePlaylistOrder,
        cleanUpSocketStates,
        timestamp,
        setTimestamp,
        status
      }}
    >
      {children}
    </SocketContext.Provider>
  )
}

export const useSockets = () => useContext(SocketContext)

export default SocketsProvider
