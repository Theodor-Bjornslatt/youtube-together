import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef } from 'react'

import NextImage from '../../components/NextImage'
import volumeIcon from '../../public/volume.png'
import volumeOff from '../../public/volumeOff.png'
import { ControlButton } from './Video.styled'
import { MainContainer, VolumeBar } from './VolumeController.styled'

type VolumeProp = {
  volume: number
  setVolume: Dispatch<SetStateAction<number>>
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function VolumeController({
  setVolume,
  volume,
  handleVolumeChange
}: VolumeProp) {
  const volumeRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!volumeRef.current) return
    const value =
      ((Number(volumeRef.current?.value) - Number(volumeRef.current?.min)) /
        (Number(volumeRef.current?.max) - Number(volumeRef.current?.min))) *
      100
    volumeRef.current.style.background =
      'linear-gradient(to right, steelblue 0%, steelblue ' +
      value +
      '%, white ' +
      value +
      '%, white 100%)'
  }, [volume])

  return (
    <MainContainer>
      <ControlButton
        onClick={() => {
          setVolume((prev) => (prev > 0 ? 0 : 0.4))
        }}
      >
        {volume === 0 ? (
          <NextImage src={volumeOff} width={30} height={30} />
        ) : (
          <NextImage src={volumeIcon} width={30} height={30} />
        )}
      </ControlButton>
      <VolumeBar
        ref={volumeRef}
        type="range"
        step="0.1"
        min={0}
        max={1}
        value={volume}
        onChange={handleVolumeChange}
      />
    </MainContainer>
  )
}
