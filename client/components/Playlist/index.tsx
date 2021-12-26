import { useState, DragEvent } from 'react'

import { PlaylistContainer } from './Playlist.styled'
import PlaylistItem from './PlaylistItem'

export default function Playlist() {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      name: 'Anna'
    },
    {
      id: 2,
      name: 'Mona'
    },
    {
      id: 3,
      name: 'Lisa'
    }
  ])

  type PlaceHolderType = {
    id: number
    name: string
  }
  const [draggedItem, setDraggedItem] = useState<PlaceHolderType | undefined>({
    id: 0,
    name: ''
  })
  const [isActive, setIsActive] = useState(false)

  function handleDragStart(
    e: DragEvent<HTMLDivElement>,
    item: PlaceHolderType
  ) {
    e.dataTransfer.effectAllowed = 'all'
    e.dataTransfer.dropEffect = 'move'
    setDraggedItem(item)
  }

  function onDragOver(e: DragEvent<HTMLDivElement>, id: number) {
    e.preventDefault()
    e.dataTransfer.effectAllowed = 'all'
    e.dataTransfer.dropEffect = 'move'
    if (draggedItem?.id === id || !draggedItem) return
    const hoveredItemIndex = playlist.findIndex((item) => item.id === id)
    const newPlaylist = [
      ...playlist.filter((item) => item.id !== draggedItem.id)
    ]
    newPlaylist.splice(hoveredItemIndex, 0, draggedItem)
    setPlaylist(newPlaylist)
  }

  function onDragEnd() {
    setDraggedItem(undefined)
  }

  function preventDefault(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  return (
    <PlaylistContainer
      isActive={isActive}
      onDragOver={preventDefault}
      onDragEnter={preventDefault}
    >
      {playlist.map((item) => (
        <PlaylistItem
          onDragOver={onDragOver}
          onDragStart={handleDragStart}
          onDragEnd={onDragEnd}
          setIsActive={setIsActive}
          key={item.id}
          item={item}
        />
      ))}
    </PlaylistContainer>
  )
}
