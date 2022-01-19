import { useState, useEffect, useMemo, useRef, PointerEvent } from 'react'

import { PlaylistContainer } from './Playlist.styled'
import PlaylistItem from './PlaylistItem'
import { PlayItem, PlaylistProps } from '.'

export default function VideoList({
  playlist,
  setPlaylist,
  onEndDrag
}: PlaylistProps) {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [itemPointerOffset, setItemPointerOffset] = useState({ x: 0, y: 0 })
  const [draggedItem, setDraggedItem] = useState<PlayItem | undefined>()
  const [playlistCopy, setPlaylistCopy] = useState<PlayItem[]>([...playlist])
  const playlistRef = useRef<HTMLDivElement>(null)

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

  function updatePointerPosition(e: PointerEvent<HTMLDivElement>) {
    if (!playlistRef?.current) return

    const rect = playlistRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top
    setPointerPosition({ x: offsetX, y: offsetY })
  }

  function endDrag(reset?: 'reset') {
    if (reset) {
      setPlaylistCopy([...playlist])
    } else {
      setPlaylist([...playlistCopy])
      onEndDrag && onEndDrag(draggedItem, playlistCopy)
      setDraggedItem(undefined)
    }
  }

  function startDrag(item: PlayItem) {
    setDraggedItem(item)
  }

  function onPointerEnter(item: PlayItem) {
    if (!draggedItem || draggedItem._id === item._id) return
    const hoveredItemIndex = playlistCopy.findIndex((it) => it._id === item._id)
    const newPlaylist = [
      ...playlistCopy.filter((item) => item._id !== draggedItem._id)
    ]
    newPlaylist.splice(hoveredItemIndex, 0, draggedItem)
    setPlaylistCopy(newPlaylist)
  }

  function setItemOffset(e: PointerEvent<HTMLDivElement>) {
    if (draggedItem) return

    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top
    setItemPointerOffset({ x: offsetX, y: offsetY })
  }

  const mappedPlaylist = useMemo(
    () =>
      playlist.map((item) => (
        <PlaylistItem
          onPointerMove={setItemOffset}
          startDrag={startDrag}
          key={item._id}
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
        ref={playlistRef}
        isActive={draggedItem != undefined}
        onPointerLeave={() => endDrag('reset')}
        onPointerMove={(e) => (unFocusElements(), updatePointerPosition(e))}
        onPointerUp={() => endDrag()}
      >
        {draggedItem ? (
          <>
            {playlistCopy?.map((item) => (
              <PlaylistItem
                startDrag={startDrag}
                key={item._id}
                item={item}
                onPointerEnter={onPointerEnter}
                isActive={draggedItem != undefined}
              />
            ))}
          </>
        ) : (
          mappedPlaylist
        )}
        {draggedItem && (
          <PlaylistItem
            startDrag={startDrag}
            item={draggedItem}
            translateX={
              pointerPosition.x - itemPointerOffset.x ||
              pointerPosition.x - itemPointerOffset.x - 0.5
            }
            translateY={
              pointerPosition.y - itemPointerOffset.y - 20 ||
              pointerPosition.y - itemPointerOffset.y - 20.5
            }
          />
        )}
      </PlaylistContainer>
    </>
  )
}
