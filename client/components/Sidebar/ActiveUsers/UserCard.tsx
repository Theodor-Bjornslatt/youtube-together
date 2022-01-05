import { User } from '../../../state/GlobalState'
import { UserContainer } from './ActiveUsers.styled'

type UserProps = {
  user: User
}

function UserCard({ user }: UserProps) {
  return (
    <UserContainer>
      <div style={{ color: `${user.color}` }}>{user.username}</div>
    </UserContainer>
  )
}

export default UserCard
