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
  const { state, dispatch } = useContext(GlobalContext)
  const { user } = state

  const { socket } = useSockets()
  const room = (router.query['slug'] && router.query['slug'][0]) || undefined

  //THIS IS NOT THE WAY - MANDALORIAN
  async function whoAmI() {
    if (!user) {
      const res = await fetch('http://localhost:8080/api/whoami', {
        credentials: 'include'
      })
      const data = await res.json()

      dispatch({ type: 'user', payload: data.user })
      socket.emit('join', {
        room,
        username: data.user.username,
        color: data.user.color
      })
    } else {
      socket.emit('join', {
        room,
        username: user?.username,
        color: user?.color
      })
    }
  }

  useEffect(() => {
    if (!room) return
    whoAmI()
  }, [room])

  return <Chat room={room}></Chat>
}

export default Room
