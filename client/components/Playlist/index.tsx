import { Dispatch, SetStateAction } from 'react'

import { PlaylistItemData } from '../../types'
import { Container } from './Playlist.styled'
import PlaylistInput from './PlaylistInput'
import VideoList from './VideoList'

export type PlaylistProps = {
  playlist: PlaylistItemData[]
  actionsPermitted?: boolean
  setPlaylist: Dispatch<SetStateAction<PlaylistItemData[]>>
  onEndDrag?: (
    item: PlaylistItemData | undefined,
    playlist: PlaylistItemData[]
  ) => Promise<void>
  onVideoAdd?: (item: PlaylistItemData) => Promise<boolean>
}

export default function Playlist({
  playlist,
  actionsPermitted = true,
  setPlaylist,
  onEndDrag,
  onVideoAdd
}: PlaylistProps) {
  return (
    <Container>
      <PlaylistInput
        actionsPermitted={actionsPermitted}
        onVideoAdd={onVideoAdd}
        setPlaylist={setPlaylist}
      />
      <VideoList
        actionsPermitted={actionsPermitted}
        playlist={playlist}
        setPlaylist={setPlaylist}
        onEndDrag={onEndDrag}
      />
    </Container>
  )
}
