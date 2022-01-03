import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Chat from '../../components/Chat'
import { useSocket } from '../../hooks/useSocket'

export type IMessages = {
  msg: string
  timestamp: number
  username: string
  id: string
}

const Room = () => {
  const socket = useSocket('http://localhost:8080', {
    username: 'Alex',
    color: '#ffff'
  })
  const router = useRouter()
  const [chatMsg, setChatMsg] = useState('')
  const [messages, setMessages] = useState<IMessages[]>([])
  const [color, setColor] = useState('')

  const handleChat = (data: any) => {
    console.log(data)
    if (data) {
      setColor(data.color)
    }
    setMessages((old) => [...old, data])
  }

  useEffect(() => {
    if (!socket) return
    const room = router.asPath
    socket.emit('join', room)
    socket.on('chat', handleChat)
  }, [])
  return <Chat></Chat>
}

export default Room
