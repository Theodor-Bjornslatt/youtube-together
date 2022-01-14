import { ChangeEvent, MouseEvent, TouchEvent } from 'react'

import { ProgressBar } from './VideoController.styled'

type VideoControllerProps = {
  duration: number
  currentTimestamp: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  syncTimestamp: (e: MouseEvent | TouchEvent) => void
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
      step="0.1"
      min={0}
      max={duration}
      value={currentTimestamp}
      onChange={onChange}
      onMouseUp={syncTimestamp}
      onTouchEnd={syncTimestamp}
    ></ProgressBar>
  )
}
