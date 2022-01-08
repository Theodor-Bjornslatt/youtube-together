import {
  PlaylistItemContainer,
  PlaylistTextContainer,
  PlaylistIconContainer
} from './Playlist.styled'
import NextImage from '../NextImage'
import play from '../../public/play.svg'
import { PlayItem } from '.'

type PlaylistItemProps = {
  item: PlayItem
  isActive?: boolean
  startDrag: (item: PlayItem) => void
  onPointerEnter?: (item: PlayItem) => void
  translateX?: number
  translateY?: number
}

export default function PlaylistItem({
  item,
  isActive,
  startDrag,
  onPointerEnter,
  translateX,
  translateY
}: PlaylistItemProps) {
  return (
    <PlaylistItemContainer
      onPointerDown={(e) => {
        e.stopPropagation(), startDrag(item)
      }}
      onPointerEnter={() => onPointerEnter && onPointerEnter(item)}
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
      <PlaylistTextContainer>
        <h4>{item.name}</h4>
      </PlaylistTextContainer>
      <PlaylistIconContainer>
        <NextImage src={play} width={34} height={34} />
      </PlaylistIconContainer>
    </PlaylistItemContainer>
  )
}
