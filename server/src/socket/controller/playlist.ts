import { Socket } from 'socket.io'

type PlaylistEventData = {
  type: 'next' | 'previous' | 'movedItem'
  room: string
  movedItemInfo?: {
    item?: {
      url: string
      title: string
      _id: string
    }
    newIndex: number
  }
}

export function onPlaylistChange(this: Socket, data: PlaylistEventData): void {
  const { type, room, movedItemInfo } = data

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
    default:
      break
  }
}
