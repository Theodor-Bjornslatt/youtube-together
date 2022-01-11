import { GetServerSideProps } from 'next'
import { useContext, useEffect } from 'react'

import Chat from '../../components/Chat'
import Sidebar from '../../components/Sidebar'
import { GlobalContext } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import { serverSideWhoAmI } from '../../utils/api'
import { Aside, ChatContainer, Container } from './room.styled'

type CurrentUserData = {
  user?: User
}

type Room = {
  name?: string
}

type RoomProps = {
  user: User | null
  room: string | null
}

type User = {
  id: string
  color: string
  username: string
  email: string
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let userData: CurrentUserData | undefined
  let currentRoom: Room = {}
  const querySlug = ctx.query.slug
  const slug = Array.isArray(querySlug) ? querySlug[0] : [querySlug][0]

  if (slug) {
    try {
      const res = await fetch(`http://localhost:8080/api/rooms/${slug}`)
      if (!res.ok) return { notFound: true }

      currentRoom = await res.json()
      if (currentRoom.name !== slug) {
        return {
          redirect: {
            permanent: false,
            destination: '/'
          }
        }
      }
      userData = await serverSideWhoAmI(ctx)
    } catch (e) {
      userData = undefined
    }
  }

  //This redirects when no room is returned
  // if (!Object.keys(currentRoom).length) {
  //   return { notFound: true }
  // }s

  return {
    props: {
      user: userData || null,
      room: slug || null
    }
  }
}

const Room = ({ user, room }: RoomProps) => {
  const { socket, activeUsers } = useSockets()
  const { dispatch } = useContext(GlobalContext)

  useEffect(() => {
    if (!room) return
    user && dispatch({ type: 'loggedIn', payload: true })

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
