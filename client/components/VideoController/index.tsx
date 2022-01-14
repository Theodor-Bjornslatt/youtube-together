import { ProgressBar } from './VideoController.styled'

type VideoControllerProps = {
  duration: number | undefined
  currentSeek: number
}

export default function VideoController({
  duration,
  currentSeek
}: VideoControllerProps) {
  return (
    <ProgressBar
      type="range"
      min={0}
      max={duration}
      value={currentSeek}
    ></ProgressBar>
  )
}
