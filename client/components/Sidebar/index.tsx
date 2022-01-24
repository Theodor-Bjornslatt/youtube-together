import { useContext, useEffect, useState } from 'react'

import {
  Button,
  ButtonContainer,
  Container,
  SidebarContentContainer,
  UsersButton
} from './Sidebar.styled'
import ActiveUsers from '../ActiveUsers/index'
import Playlist from '../Playlist'
import { PlaylistItemData } from '../../types'
import { useSockets } from '../../state/SocketContext'
import { GlobalContext } from '../../state/GlobalState'
import { User } from '../../types'

type SidebarProp = {
  onEndDrag: (
    item: PlaylistItemData | undefined,
    playlist: PlaylistItemData[]
  ) => Promise<void>
  onVideoAdd: (item: PlaylistItemData) => Promise<boolean>
  user: User | null
}

function Sidebar({ onEndDrag, onVideoAdd, user }: SidebarProp) {
  const { playlist, setPlaylist, activeUsers, host } = useSockets()
  const { state } = useContext(GlobalContext)
  const [display, setDisplay] = useState<'playlist' | 'users'>('playlist')
  const [actionsAllowed, setActionsAllowed] = useState(false)

  useEffect(() => {
    if (host === user?.username || host === state.defaultUsername) {
      setActionsAllowed(true)
    }
  }, [host])

  return (
    <Container>
      <ButtonContainer>
        <UsersButton
          onClick={() => setDisplay('users')}
          isActive={display === 'users'}
        >
          Users
        </UsersButton>
        <Button
          onClick={() => setDisplay('playlist')}
          isActive={display === 'playlist'}
        >
          Playlist
        </Button>
      </ButtonContainer>
      <SidebarContentContainer>
        {display === 'users' && <ActiveUsers users={activeUsers} user={user} />}
        {display === 'playlist' && playlist && (
          <Playlist
            actionsPermitted={actionsAllowed}
            onVideoAdd={onVideoAdd}
            playlist={playlist}
            setPlaylist={setPlaylist}
            onEndDrag={onEndDrag}
          />
        )}
      </SidebarContentContainer>
    </Container>
  )
}

export default Sidebar
