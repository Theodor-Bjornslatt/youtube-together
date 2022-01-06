import { Container } from './Sidebar.styled'
import ActiveUsers from '../ActiveUsers/index'
import { User } from '../../state/GlobalState'

type SidebarProp = {
  users: User[] | undefined
}
function Sidebar({ users }: SidebarProp) {
  return (
    <Container>
      <ActiveUsers users={users}></ActiveUsers>
    </Container>
  )
}

export default Sidebar
