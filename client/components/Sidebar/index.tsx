import { useState } from 'react'

import {
  Button,
  ButtonContainer,
  Container,
  UsersButton
} from './Sidebar.styled'
import ActiveUsers from '../ActiveUsers/index'
import { User } from '../../state/GlobalState'
import Playlist from '../Playlist'
import { PlaylistContainer } from '../Playlist/Playlist.styled'
import { useSockets } from '../../state/SocketContext'

type SidebarProp = {
  users: User[] | undefined
}
function Sidebar({ users }: SidebarProp) {
  const [display, setDisplay] = useState('users')
  const { playlist, setPlaylist } = useSockets()
  return (
    <Container>
      <ButtonContainer>
        <UsersButton onClick={() => setDisplay('users')}>Users</UsersButton>
        <Button onClick={() => setDisplay('playlist')}>Playlist</Button>
      </ButtonContainer>
      {display == 'users' && <ActiveUsers users={users} />}
      {display == 'playlist' && playlist && (
        <PlaylistContainer>
          <Playlist playlist={playlist} setPlaylist={setPlaylist} />
        </PlaylistContainer>
      )}
    </Container>
  )
}

export default Sidebar
