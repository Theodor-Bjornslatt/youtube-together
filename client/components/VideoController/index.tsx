import { ProgressBar } from './VideoController.styled'

type VideoControllerProps = {
  duration: number | undefined
  currentTimestamp: number
  onChange: (e: any) => void
  syncTimestamp: (e: any) => void
}

export default function VideoController({
  duration,
  currentTimestamp,
  onChange,
  syncTimestamp
}: VideoControllerProps) {
  return (
    <ProgressBar
      type="range"
      min={0}
      max={duration}
      value={currentTimestamp}
      onChange={onChange}
      onMouseUp={syncTimestamp}
      onTouchEnd={syncTimestamp}
    ></ProgressBar>
  )
}
