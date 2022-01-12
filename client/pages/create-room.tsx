import { GetServerSideProps } from 'next'
import { useContext, useEffect } from 'react'

import { serverSideWhoAmI } from '../utils/api'
import CreateRoomForm from '../components/CreateRoomForm'
import { GlobalContext, User } from '../state/GlobalState'

type UserData = {
  user?: User
}

type RoomProps = {
  user: User | null
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let userData: UserData | undefined

  try {
    userData = await serverSideWhoAmI(ctx)
  } catch (e) {
    userData = undefined
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return {
    props: {
      user: userData?.user || null
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
