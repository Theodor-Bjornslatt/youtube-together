import UserCard from './UserCard'
import { Container } from './ActiveUsers.styled'
import { User } from '../../state/GlobalState'

type ActiveUserProp = {
  users: User[] | undefined
}

function ActiveUsers({ users }: ActiveUserProp) {
  return (
    <Container>
      {users && users.map((user, idx) => <UserCard key={idx} user={user} />)}
    </Container>
  )
}

export default ActiveUsers
