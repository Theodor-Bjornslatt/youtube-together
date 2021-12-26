import { Dispatch, SetStateAction, DragEvent } from 'react'

import {
  PlaylistItemContainer,
  PlaylistTextContainer,
  PlaylistIconContainer
} from './Playlist.styled'
import NextImage from '../NextImage'
import play from '../../public/play.svg'

type PlaylistItemProps = {
  item: { id: number; name: string }
  setIsActive: Dispatch<SetStateAction<boolean>>
  onDragStart: (
    e: DragEvent<HTMLDivElement>,
    item: { id: number; name: string }
  ) => void
  onDragOver: (e: DragEvent<HTMLDivElement>, id: number) => void
  onDragEnd: () => void
}

export default function PlaylistItem({
  item,
  setIsActive,
  onDragStart,
  onDragOver,
  onDragEnd
}: PlaylistItemProps) {
  return (
    <PlaylistItemContainer
      onDragStart={(e) => onDragStart(e, item)}
      onPointerDown={() => setIsActive(true)}
      onPointerUp={() => setIsActive(false)}
      onDragOver={(e) => onDragOver(e, item.id)}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDragEnd={onDragEnd}
      draggable
      isActive={true}
    >
      <PlaylistTextContainer>
        <h4>{item.name}</h4>
      </PlaylistTextContainer>
      <PlaylistIconContainer>
        <NextImage src={play} width={34} height={34} />
      </PlaylistIconContainer>
    </PlaylistItemContainer>
  )
}
