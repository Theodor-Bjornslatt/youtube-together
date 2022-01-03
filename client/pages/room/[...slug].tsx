import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Chat from '../../components/Chat'
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
  const { socket } = useSockets()
  const room = (router.query['slug'] && router.query['slug'][0]) || undefined

  useEffect(() => {
    if (!room) return
    socket.emit('join', { room, username: 'Lala', color: 'red' })
  }, [room])

  return <Chat room={room}></Chat>
}

export default Room
