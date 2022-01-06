import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import Chat from '../../components/Chat'
import Sidebar from '../../components/Sidebar'
import { GlobalContext, User } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import ServerSideWhoAmI from '../../utils/serverSideWhoAmI'
import { Aside, ChatContainer, Container } from './room.styled'

type UserData = {
  user?: User
}

type RoomProps = {
  user: User | null
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let userData: UserData | undefined

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
      user: userData?.user || null
    }
  }
}

const Room = ({ user }: RoomProps) => {
  const router = useRouter()
  const { socket, activeUsers } = useSockets()
  const { dispatch } = useContext(GlobalContext)

  const room =
    (router.query['slug'] && `#${router.query['slug'][0]}`) || undefined

  useEffect(() => {
    console.log('user :>> ', user)
    if (!room) return
    user && dispatch({ type: 'user', payload: user })

    socket?.emit('join', {
      room,
      username: user?.username,
      color: user?.color
    })
  }, [room])

  return (
    <Container>
      <ChatContainer>
        <Chat room={room} />
      </ChatContainer>
      <Aside>
        <Sidebar users={activeUsers} />
      </Aside>
    </Container>
  )
}

export default Room
