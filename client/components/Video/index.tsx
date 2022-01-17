import { useState, useRef, ChangeEvent, BaseSyntheticEvent } from 'react'
import ReactPlayer from 'react-player/lazy'

import VideoController from './VideoController'
import { VideoPlayer, ControlButton } from './Video.styled'
import { useSockets } from '../../state/SocketContext'
import NextImage from '../NextImage'
import play from '../../public/play.png'
import pause from '../../public/pause.png'
import { PlayItem } from '../Playlist'
import { apiSaveNewPlaylistOrder } from '../../utils/api'
import next from '../../public/next.png'
import previous from '../../public/previous.png'

type VideoProps = {
  room: string
}

export default function Video({ room }: VideoProps) {
  const { playlist, setPlaylist } = useSockets()
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef<ReactPlayer>(null)
  const player = ref.current ? ref.current.getInternalPlayer() : undefined
  const urls = playlist?.map((item) => item.url)
  const [currentTimestamp, setCurrentTimestamp] = useState(0)
  const { socket } = useSockets()

  const handleStartStop = () => {
    const status = player?.getPlayerState()
    setIsPlaying((prev) => !prev)
    const playerStatus = {
      room,
      status
    }
    socket?.emit('status', playerStatus)
  }

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

  const handleProgress = (e: { [key: string]: number }) => {
    setCurrentTimestamp(e.playedSeconds)
  }

  const handleTimestampChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrentTimestamp(Number(e.target.value))
    player && player.seekTo(e.target.value)
  }

  const handleBroadCastSync = (e: BaseSyntheticEvent): void => {
    console.log('broadcast', e.target.value)
  }

  const playNextVideo = async () => {
    let firstItem: PlayItem | undefined
    setPlaylist((old) => {
      const newOrder = [...old]
      firstItem = newOrder.shift()
      firstItem && newOrder.push(firstItem)
      return newOrder
    })

    await apiSaveNewPlaylistOrder(room, {
      ...firstItem,
      position: playlist?.length
    })

    // emit new order
    player?.nextVideo()
  }

  const playPreviousVideo = async () => {
    let lastItem: PlayItem | undefined
    setPlaylist((old) => {
      const newOrder = [...old]
      lastItem = newOrder.pop()
      lastItem && newOrder.push(lastItem)
      return newOrder
    })

    await apiSaveNewPlaylistOrder(room, {
      ...lastItem,
      position: 0
    })

    // emit new order
    player?.nextVideo()
  }

  if (player) player.allowFullscreen = 0
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
        duration={player ? player.getDuration() : 100}
        currentTimestamp={currentTimestamp}
        onChange={handleTimestampChange}
        syncTimestamp={handleBroadCastSync}
      />
      <ControlButton onClick={handleStartStop}>
        {isPlaying ? (
          <NextImage src={pause} width={30} height={30} />
        ) : (
          <NextImage src={play} width={30} height={30} />
        )}
      </ControlButton>
      <ControlButton value={'next'} onClick={playNextVideo}>
        <NextImage height={30} width={30} src={next} />
      </ControlButton>
      <ControlButton value={'previous'} onClick={playPreviousVideo}>
        <NextImage height={30} width={30} src={previous} />
      </ControlButton>
    </>
  )
}
