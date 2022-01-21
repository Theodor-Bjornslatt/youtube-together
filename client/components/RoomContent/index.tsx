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

export type RoomContentProps = {
  room: string
}

export default function RoomContent({ room }: RoomContentProps) {
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
      return true
    } catch (error) {
      return false
    }
  }

  return (
    <Container>
      <MainSectionContainer>
        <Video room={room} />
        <ChatContainer>
          <Chat room={room} />
        </ChatContainer>
      </MainSectionContainer>
      <Aside>
        <Sidebar onEndDrag={handlePlaylistChange} onVideoAdd={handleVideoAdd} />
      </Aside>
    </Container>
  )
}
