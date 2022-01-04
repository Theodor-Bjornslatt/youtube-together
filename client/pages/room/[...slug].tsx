import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Chat from '../../components/Chat'
import { setUser, User } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import ServerSideWhoAmI from '../../utils/serverSideWhoAmI'

export type IMessages = {
  msg: string
  timestamp: number
  username: string
  id: string
  color: string
}

type RoomProps = {
  userData: User | undefined
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let userData

  try {
    userData = await ServerSideWhoAmI(ctx)
  } catch (e) {
    userData = undefined
    // TO REDIRECT DO THIS
    // return {
    //   redirect: {
    //     permanent: false,
    //     destination: '/'
    //   }
    // }
  }

  return {
    props: {
      userData
    }
  }
}

const Room = ({ userData }: RoomProps) => {
  const router = useRouter()
  const { socket } = useSockets()
  userData && setUser(userData)
  const room = (router.query['slug'] && router.query['slug'][0]) || undefined

  useEffect(() => {
    if (!room) return
    socket.emit('join', {
      room,
      username: userData?.username,
      color: userData?.color
    })
  }, [room])

  return <Chat room={room}></Chat>
}

export default Room
