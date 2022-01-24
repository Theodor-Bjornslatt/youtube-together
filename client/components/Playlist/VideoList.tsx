import {
  useState,
  useEffect,
  useMemo,
  useRef,
  PointerEvent,
  useContext
} from 'react'

import { PlaylistContainer } from './Playlist.styled'
import PlaylistItem from './PlaylistItem'
import { PlaylistProps } from '.'
import { GlobalContext } from '../../state/GlobalState'
import { PlaylistItemData } from '../../types'

export default function VideoList({
  actionsPermitted,
  playlist,
  setPlaylist,
  onEndDrag
}: PlaylistProps) {
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 })
  const [itemPointerOffset, setItemPointerOffset] = useState({ x: 0, y: 0 })
  const [draggedItem, setDraggedItem] = useState<PlaylistItemData | undefined>()
  const [playlistCopy, setPlaylistCopy] = useState<PlaylistItemData[]>([
    ...playlist
  ])
  const playlistRef = useRef<HTMLDivElement>(null)
  const { dispatch } = useContext(GlobalContext)

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
      const newIndex = playlistCopy.findIndex(
        (it) => it._id === draggedItem?._id
      )
      dispatch({
        type: 'movedItemInfo',
        payload: { item: draggedItem, newIndex }
      })
      setPlaylist([...playlistCopy])
      onEndDrag && onEndDrag(draggedItem, playlistCopy)
      setDraggedItem(undefined)
    }
  }

  function startDrag(item: PlaylistItemData) {
    actionsPermitted && setDraggedItem(item)
  }

  function onPointerEnter(item: PlaylistItemData) {
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
