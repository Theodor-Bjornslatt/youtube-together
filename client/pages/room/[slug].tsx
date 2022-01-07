import { GetServerSideProps } from 'next'
import { useContext, useEffect } from 'react'

import Chat from '../../components/Chat'
import Sidebar from '../../components/Sidebar'
import { GlobalContext, User } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import ServerSideWhoAmI from '../../utils/serverSideWhoAmI'
import { Aside, ChatContainer, Container } from './room.styled'

type CurrentUserData = {
  user?: User
}

type RoomData = {
  users: string[]
  size: number
}

type Room = {
  room?: { [key: string]: RoomData }
}

type RoomProps = {
  user: User | null
  room: string | null
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
      currentRoom.room && console.log('current Room', currentRoom)
      userData = await ServerSideWhoAmI(ctx)
    } catch (e) {
      userData = undefined
    }
  }

  //This redirects when no room is returned
  // if (!Object.keys(currentRoom).length) {
  //   return { notFound: true }
  // }

  return {
    props: {
      user: userData?.user || null,
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
