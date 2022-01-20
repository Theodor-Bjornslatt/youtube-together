import { GetServerSideProps } from 'next'
import router from 'next/router'
import { useContext, useEffect } from 'react'

import Chat from '../../components/Chat'
import Header from '../../components/Header'
import { PlaylistItemData } from '../../types'
import Sidebar from '../../components/Sidebar'
import Video from '../../components/Video'
import { GlobalContext } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import {
  apiPostPlaylistItem,
  apiSaveNewPlaylistOrder,
  serverSideWhoAmI
} from '../../utils/api'
import { Aside, ChatContainer, Container } from './room.styled'

type CurrentUserData = {
  user?: User
}

type Room = {
  name?: string
}

type RoomProps = {
  user: User | null
  room: string
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
        return { notFound: true }
      }
      userData = await serverSideWhoAmI(ctx)
    } catch (e) {
      userData = undefined
    }
  }

  return {
    props: {
      user: userData || null,
      room: slug
    }
  }
}

const Room = ({ user, room }: RoomProps) => {
  const { socket, cleanUpSocketStates, activeUsers, timestamp, host } =
    useSockets()

  const { dispatch, state } = useContext(GlobalContext)

  useEffect(() => {
    const handleRouteChange = () => {
      socket?.emit('leave', room)
      cleanUpSocketStates()
    }

    user && dispatch({ type: 'loggedIn', payload: true })

    socket?.emit('join', {
      room,
      username: user?.username || state.defaultUsername,
      color: user?.color
    })

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  useEffect(() => {
    if (user?.username !== host && state.defaultUsername !== host) return

    if (Math.round(timestamp) % 5 === 0) {
      socket?.emit('status', {
        room: room,
        status: { type: 'time', timestamp }
      })
    }
  }, [timestamp])

  const handlePlaylistChange = async (
    item: PlaylistItemData | undefined,
    playlist: PlaylistItemData[]
  ) => {
    if (!item) return
    const index = playlist.findIndex((it) => it._id === item._id)
    await apiSaveNewPlaylistOrder(room, { position: index, ...item })
  }

  const handleVideoAdd = async (item: PlaylistItemData) => {
    try {
      await apiPostPlaylistItem(room, item)
      return true
    } catch (error) {
      return false
    }
  }
  return (
    <>
      <Header title={(room = room ?? 'My Room')} />
      <Container>
        <div
          style={{
            justifySelf: 'center',
            width: '100%',
            display: 'grid',
            flexDirection: 'column',
            height: 'calc(100vh - 72px - 72px)'
          }}
        >
          <Video room={room} />
          <ChatContainer>
            <Chat room={room} />
          </ChatContainer>
        </div>
        <Aside>
          <Sidebar
            users={activeUsers}
            onEndDrag={handlePlaylistChange}
            onVideoAdd={handleVideoAdd}
          />
        </Aside>
      </Container>
    </>
  )
}

export default Room
