import { Socket } from 'socket.io'

import { getIo } from '../io'

type PlaylistItem = {
  url: string
  title: string
  _id: string
}

type PlaylistEventData = {
  type: 'next' | 'previous' | 'movedItem' | 'add' | 'autoPlay'
  room: string
  movedItemInfo?: {
    item?: PlaylistItem
    newIndex: number
  }
  item?: PlaylistItem
}

export function onPlaylistChange(this: Socket, data: PlaylistEventData): void {
  const { type, room, movedItemInfo, item } = data

  switch (type) {
    case 'next':
      this.broadcast.to(room).emit('nextVideo')
      break
    case 'previous':
      this.broadcast.to(room).emit('previousVideo')
      break
    case 'movedItem':
      this.broadcast.to(room).emit('newPlaylistOrder', movedItemInfo)
      break
    case 'add':
      this.broadcast.to(room).emit('addItem', item)
      break
    case 'autoPlay':
      getIo().to(room).emit('nextVideo')
      break
    default:
      break
  }
}
