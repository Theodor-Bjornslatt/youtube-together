import { useState, useEffect } from 'react'

import { usePointerPosition } from '../../hooks/usePointerPosition'
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

  const [draggedIndex, setDraggedIndex] = useState<number | undefined>(undefined)
  const [draggedItem, setDraggedItem] = useState<PlaceHolderType | undefined>(undefined)
  const [isPointerOnPlaylist, setIsPointerOnPlaylist] = useState(false)

  const pointerPosition = usePointerPosition()

  function unFocusElements() {
    if (document.getSelection()) {
      document.getSelection()?.empty()
    }
  }

  useEffect(() => {
    window.addEventListener('pointerup', endDrag)
    window.addEventListener('pointermove', unFocusElements)

    return () => {
      window.removeEventListener('pointerup', endDrag)
      window.removeEventListener('pointermove', unFocusElements)
    }
  })

  function endDrag() {
    if (!isPointerOnPlaylist && draggedIndex && draggedItem) {
      const previousPlaylist = [...playlist].filter(it => it.id !== draggedItem.id)
      previousPlaylist.splice(draggedIndex, 0, draggedItem)
      setPlaylist(previousPlaylist)
    }
    setDraggedItem(undefined)
  }

  function startDrag(item: PlaceHolderType) {
    setDraggedIndex(playlist.findIndex(it => it.id === item.id))
    setDraggedItem(item)
  }

  function onPointerEnter(item: PlaceHolderType) {
    if (!draggedItem || draggedItem.id === item.id) return
    const hoveredItemIndex = playlist.findIndex((it) => it.id === item.id)
    const newPlaylist = [
      ...playlist.filter((item) => item.id !== draggedItem.id)
    ]
    newPlaylist.splice(hoveredItemIndex, 0, draggedItem)
    setPlaylist(newPlaylist)
  }

  return (
    <PlaylistContainer
      isActive={draggedItem != undefined}
      onPointerEnter={() => !isPointerOnPlaylist && setIsPointerOnPlaylist(true)}
      onPointerLeave={() => isPointerOnPlaylist && setIsPointerOnPlaylist(false)}
    >
      {playlist.map((item) => (
        <PlaylistItem
          startDrag={startDrag}
          key={item.id}
          item={item}
          onPointerEnter={onPointerEnter}
          isActive={draggedItem != undefined}
        />
      ))}
      {draggedItem && <PlaylistItem startDrag={startDrag} item={draggedItem} translateX={pointerPosition.x - 80} translateY={pointerPosition.y - 20} />}
    </PlaylistContainer >
  )
}
