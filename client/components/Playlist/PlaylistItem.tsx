import { RefObject, PointerEvent } from 'react'

import {
  PlaylistItemContainer,
  PlaylistText,
  PlaylistIconContainer
} from './Playlist.styled'
import NextImage from '../NextImage'
import play from '../../public/play.svg'
import { PlaylistItemData } from '../../types'

type PlaylistItemProps = {
  item: PlaylistItemData
  isActive?: boolean
  startDrag: (item: PlaylistItemData) => void
  onPointerEnter?: (item: PlaylistItemData) => void
  translateX?: number
  translateY?: number
  ref?: RefObject<HTMLDivElement>
  onPointerMove?: (e: PointerEvent<HTMLDivElement>) => void
}

export default function PlaylistItem({
  item,
  isActive,
  startDrag,
  onPointerEnter,
  translateX,
  translateY,
  ref,
  onPointerMove
}: PlaylistItemProps) {
  return (
    <PlaylistItemContainer
      ref={ref}
      onPointerDown={(e) => {
        e.stopPropagation(), startDrag(item)
      }}
      onPointerEnter={() => onPointerEnter && onPointerEnter(item)}
      onPointerMove={onPointerMove}
      onDragStart={(e) => e.preventDefault()}
      isActive={isActive}
      isDragging={translateX && translateY ? true : false}
      style={{
        transform: `${
          translateY && translateX
            ? `translateY(${translateY}px) translateX(${translateX}px)`
            : 'none'
        }`
      }}
    >
      <PlaylistText>
        <span>{item.title}</span>
      </PlaylistText>
      <PlaylistIconContainer>
        <NextImage src={play} width={34} height={34} />
      </PlaylistIconContainer>
    </PlaylistItemContainer>
  )
}
