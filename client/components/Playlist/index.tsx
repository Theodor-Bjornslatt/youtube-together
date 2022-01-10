import { Dispatch, SetStateAction } from 'react'

import PlaylistInput from './PlaylistInput'
import VideoList from './VideoList'

export type PlayItem = {
  id: string
  name: string
}

export type PlaylistProps = {
  playlist: PlayItem[]
  setPlaylist: Dispatch<SetStateAction<PlayItem[]>>
}

export default function Playlist({ playlist, setPlaylist }: PlaylistProps) {
  return (
    <>
      <PlaylistInput setPlaylist={setPlaylist} />
      <VideoList playlist={playlist} setPlaylist={setPlaylist} />
    </>
  )
}
