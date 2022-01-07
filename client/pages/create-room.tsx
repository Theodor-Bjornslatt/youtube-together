import { GetServerSideProps } from 'next'
import { useContext } from 'react'

import CreateRoomForm from '../components/CreateRoomForm'
import { GlobalContext, User } from '../state/GlobalState'
import ServerSideWhoAmI from '../utils/serverSideWhoAmI'

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
  user && dispatch({ type: 'user', payload: user })

  return <CreateRoomForm />
}
