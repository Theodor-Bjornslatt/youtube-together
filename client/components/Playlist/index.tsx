import { Dispatch, SetStateAction } from 'react'

import { PlaylistData } from '../../state/SocketContext'
import { Container } from './Playlist.styled'
import PlaylistInput from './PlaylistInput'
import VideoList from './VideoList'

export type PlayItem = {
  id?: number
} & PlaylistData

export type PlaylistProps = {
  playlist: PlayItem[]
  setPlaylist: Dispatch<SetStateAction<PlayItem[]>>
}

export default function Playlist({ playlist, setPlaylist }: PlaylistProps) {
  return (
    <Container>
      <PlaylistInput setPlaylist={setPlaylist} />
      <VideoList playlist={playlist} setPlaylist={setPlaylist} />
    </Container>
  )
}
