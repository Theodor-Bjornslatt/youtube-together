import { useState, useEffect, useMemo } from 'react'

import { PlaylistContainer } from './Playlist.styled'
import PlaylistItem from './PlaylistItem'
import { PlayItem, PlaylistProps } from '.'

export default function VideoList({ playlist, setPlaylist }: PlaylistProps) {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [draggedItem, setDraggedItem] = useState<PlayItem | undefined>()
  const [playlistCopy, setPlaylistCopy] = useState<PlayItem[]>([...playlist])

  useEffect(() => {
    window.addEventListener('pointerup', () => setDraggedItem(undefined))

    return () => {
      window.removeEventListener('pointerup', () => setDraggedItem(undefined))
    }
  }, [])

  function unFocusElements() {
    if (document.getSelection()) {
      document.getSelection()?.empty()
    }
  }

  function endDrag(reset?: 'reset') {
    if (reset) {
      setPlaylistCopy([...playlist])
    } else {
      setPlaylist([...playlistCopy])
      setDraggedItem(undefined)
    }
  }

  function startDrag(item: PlayItem) {
    setDraggedItem(item)
  }

  function onPointerEnter(item: PlayItem) {
    if (!draggedItem || draggedItem.id === item.id) return
    const hoveredItemIndex = playlistCopy.findIndex((it) => it.id === item.id)
    const newPlaylist = [
      ...playlistCopy.filter((item) => item.id !== draggedItem.id)
    ]
    newPlaylist.splice(hoveredItemIndex, 0, draggedItem)
    setPlaylistCopy(newPlaylist)
  }

  const mappedPlaylist = useMemo(
    () =>
      playlist.map((item) => (
        <PlaylistItem
          startDrag={startDrag}
          key={item.id || item._id}
          item={item}
          onPointerEnter={onPointerEnter}
          isActive={draggedItem != undefined}
        />
      )),
    [playlist, draggedItem]
  )

  return (
    <>
      <PlaylistContainer
        isActive={draggedItem != undefined}
        onPointerLeave={() => endDrag('reset')}
        onPointerMove={(e) => (
          unFocusElements(),
          setPointerPosition({
            x: e.clientX,
            y: e.clientY
          })
        )}
        onPointerUp={() => endDrag()}
      >
        {draggedItem ? (
          <>
            {playlistCopy?.map((item) => (
              <PlaylistItem
                startDrag={startDrag}
                key={item.id || item._id}
                item={item}
                onPointerEnter={onPointerEnter}
                isActive={draggedItem != undefined}
              />
            ))}
          </>
        ) : (
          mappedPlaylist
        )}
      </PlaylistContainer>
      {draggedItem && (
        <PlaylistItem
          startDrag={startDrag}
          item={draggedItem}
          translateX={pointerPosition.x - 80}
          translateY={pointerPosition.y - 20}
        />
      )}
    </>
  )
}
