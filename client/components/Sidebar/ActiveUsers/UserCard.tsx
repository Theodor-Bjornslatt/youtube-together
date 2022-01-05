import { User } from '../../../state/GlobalState'
import { UserContainer, Avatar, Name } from './ActiveUsers.styled'

type UserProps = {
  user: User
}

function UserCard({ user }: UserProps) {
  const AVATAR_URL = `https://eu.ui-avatars.com/api/?name=${
    user.username
  }&background=${user.color.substring(1)}`
  return (
    <UserContainer>
      <Avatar alt="Avatar" src={AVATAR_URL}></Avatar>
      <Name color={user.color}>{user.username}</Name>
    </UserContainer>
  )
}

export default UserCard
