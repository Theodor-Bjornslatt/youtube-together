import { useState, useRef, ChangeEvent } from 'react'
import ReactPlayer from 'react-player/lazy'

import { VideoPlayer } from './Video.styled'
import { useSockets } from '../../state/SocketContext'
import VideoController from '../VideoController'

export default function Video() {
  const { playlist } = useSockets()
  const ref = useRef<ReactPlayer>(null)
  const player = ref.current ? ref.current.getInternalPlayer() : undefined
  const urls = playlist?.map((item) => item.url)
  const [currentTimestamp, setCurrentTimestamp] = useState(0)

  const youtubeConfig = {
    youtube: {
      playerVars: {
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        loop: 0,
        controls: 0
      }
    }
  }

  const handleProgress = (e: any) => {
    setCurrentTimestamp(e.playedSeconds)
  }

  const handleTimestampChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTimestamp(Number(e.target.value))
    player && player.seekTo(e.target.value)
  }

  const handleBroadCastSync = (e: any): void => {
    console.log('broadcast', e.target.value)
  }

  if (player) player.allowFullscreen = 0
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <>
      <div style={{ position: 'relative' }}>
        <VideoPlayer
          url={urls}
          ref={ref}
          playing={isPlaying}
          config={youtubeConfig}
          onProgress={handleProgress}
        />
        {/* {!isPlaying && (
          <PauseOverlay>The host has paused this video</PauseOverlay>
        )} */}
      </div>
      <VideoController
        duration={player?.getDuration || 100}
        currentTimestamp={currentTimestamp}
        onChange={handleTimestampChange}
        syncTimestamp={handleBroadCastSync}
      />
      <button onClick={() => setIsPlaying((prev) => !prev)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </>
  )
}
