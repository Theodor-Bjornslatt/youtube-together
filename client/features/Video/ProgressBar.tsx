import { ChangeEvent, MouseEvent, TouchEvent, useEffect, useRef } from 'react'

import { ProgressBar } from './ProgresBar.styled'

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
  const barRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!barRef.current) return

    const value =
      ((Number(barRef.current.value) - Number(barRef.current.min)) /
        (Number(barRef.current.max) - Number(barRef.current.min))) *
      100
    barRef.current.style.background =
      'linear-gradient(to right, red 0%, red ' +
      value +
      '%, white ' +
      value +
      '%, white 100%)'
  }, [currentTimestamp])

  return (
    <ProgressBar
      ref={barRef}
      type="range"
      step="0.1"
      min={0}
      max={duration}
      value={currentTimestamp}
      onChange={onChange}
      onMouseUp={syncTimestamp}
      onTouchEnd={syncTimestamp}
    />
  )
}
