import { GetServerSideProps } from 'next'
import router from 'next/router'
import { useContext, useEffect } from 'react'

import Header from '../../components/Header'
import { GlobalContext } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import { apiGetRoomByName, serverSideWhoAmI } from '../../utils/api'
import RoomContent from '../../components/RoomContent'
import { colors } from '../../styles/variables'

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
  const querySlug = ctx.query.slug
  const slug = Array.isArray(querySlug) ? querySlug[0] : [querySlug][0]

  if (slug) {
    try {
      const currentRoom = await apiGetRoomByName(slug)
      if (currentRoom.name !== slug) {
        return { notFound: true }
      }
    } catch (error) {
      return { notFound: true }
    }

    try {
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
  const { socket, cleanUpSocketStates, timestamp, host } = useSockets()

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
      color: user?.color || colors.darkPink
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

  return (
    <>
      <Header title={(room = room ?? 'THE ROOM THAT MUST NOT BE MENTIONED')} />
      <RoomContent room={room} user={user} />
    </>
  )
}

export default Room
