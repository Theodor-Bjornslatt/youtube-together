import {
  Aside,
  ChatContainer,
  Container,
  MainSectionContainer
} from './room.styled'
import Sidebar from '../Sidebar'
import Video from '../Video'
import Chat from '../Chat'
import { PlaylistItemData } from '../../types'
import { apiPostPlaylistItem, apiSaveNewPlaylistOrder } from '../../utils/api'
import { useSockets } from '../../state/SocketContext'
import { User } from '../../types'

export type RoomContentProps = {
  room: string
  user: User | null
}

export default function RoomContent({ room, user }: RoomContentProps) {
  const { socket } = useSockets()

  const handlePlaylistChange = async (
    item: PlaylistItemData | undefined,
    playlist: PlaylistItemData[]
  ) => {
    if (!item) return
    const index = playlist.findIndex((it) => it._id === item._id)
    await apiSaveNewPlaylistOrder(room, { position: index, ...item })
  }

  const handleVideoAdd = async (item: PlaylistItemData) => {
    try {
      await apiPostPlaylistItem(room, item)
      socket?.emit('playlist', { type: 'add', room, item })
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <Container>
      <MainSectionContainer>
        <Video room={room} user={user} />
        <ChatContainer>
          <Chat room={room} user={user} />
        </ChatContainer>
      </MainSectionContainer>
      <Aside>
        <Sidebar
          user={user}
          onEndDrag={handlePlaylistChange}
          onVideoAdd={handleVideoAdd}
        />
      </Aside>
    </Container>
  )
}
