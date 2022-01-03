import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import Chat from '../../components/Chat'
import { GlobalContext } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'

export type IMessages = {
  msg: string
  timestamp: number
  username: string
  id: string
  color: string
}

const Room = () => {
  const router = useRouter()
  const { state } = useContext(GlobalContext)
  const { user } = state

  const { socket } = useSockets()
  const room = (router.query['slug'] && router.query['slug'][0]) || undefined

  useEffect(() => {
    if (!room || !user) return
    socket.emit('join', { room, username: user?.username, color: user?.color })
  }, [room, user])

  return <Chat room={room}></Chat>
}

export default Room
