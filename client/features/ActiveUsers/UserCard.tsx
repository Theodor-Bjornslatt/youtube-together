import { useContext } from 'react'

import { User } from '../../types'
import { GlobalContext } from '../../state/GlobalState'
import { useSockets } from '../../state/SocketContext'
import NextImage from '../NextImage'
import { UserContainer, Avatar, Name } from './ActiveUsers.styled'
import crown from '../../public/crown.png'
import { colors } from '../../styles/variables'
type UserProps = {
  user: User | null
}

function UserCard({ user }: UserProps) {
  const { state } = useContext(GlobalContext)
  const { host } = useSockets()

  const username = user?.username || state.defaultUsername
  const color = user?.color || colors.darkPink

  const AVATAR_URL = `https://eu.ui-avatars.com/api/?name=${username}&background=${color.substring(
    1
  )}`
  return (
    <UserContainer>
      <Avatar alt="Avatar" src={AVATAR_URL}></Avatar>
      <Name color={color}>{username}</Name>
      {host === username && <NextImage src={crown} width={25} height={25} />}
    </UserContainer>
  )
}

export default UserCard
