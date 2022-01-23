import UserCard from './UserCard'
import { Container } from './ActiveUsers.styled'
import { User } from '../../state/GlobalState'

type ActiveUserProp = {
  users: User[] | undefined
  user: User | null
}

function ActiveUsers({ users, user }: ActiveUserProp) {
  return (
    <Container>
      <UserCard user={user} />
      {users && users.map((user, idx) => <UserCard key={idx} user={user} />)}
    </Container>
  )
}

export default ActiveUsers
