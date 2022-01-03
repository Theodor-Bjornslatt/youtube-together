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
  const { socket } = useSockets()
  const router = useRouter()

  useEffect(() => {
    if (!socket) return
    const room = router.asPath
    socket.emit('join', { room, username: 'Lala', color: 'red' })
  }, [socket])

  return <Chat></Chat>
}

export default Room
