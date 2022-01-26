import { GetServerSideProps } from 'next'
import { useContext, useEffect } from 'react'

import CreateRoomForm from '../features/CreateRoomForm'
import { GlobalContext } from '../state/GlobalState'
import { User } from '../types'

type UserData = {
  user?: User
}

type RoomProps = {
  user: User | null
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let userData: UserData | undefined
  const { req } = ctx
  const { cookies } = req

  // @TODO throw different errors depending on case
  if (!cookies.sid) return { notFound: true }

  try {
    const res = await fetch(`${process.env.API_URL}/api/whoami`, {
      headers: { Cookie: `sid=${cookies.sid}` },
      credentials: 'include'
    })
    if (!res.ok) return { notFound: true }
    userData = await res.json()
  } catch (e) {
    return { notFound: true }
  }

  return {
    props: {
      user: userData
    }
  }
}

export default function CreateRoom({ user }: RoomProps) {
  const { dispatch } = useContext(GlobalContext)

  useEffect(() => {
    dispatch({ type: 'loggedIn', payload: !!user })
  }, [])

  return <CreateRoomForm />
}
