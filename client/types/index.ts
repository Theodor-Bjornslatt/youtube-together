export type Room = {
  name: string
  online: string
  playlist?: Playlist[]
  nickname: string
  cover: string
}

export type PostRoomData = {
  name: string
  nickname: string
}

export type Rooms = {
  rooms: Room[]
}

export type Playlist = {
  url: string
  id: string
  title: string
}

export type PlaylistItemData = {
  _id?: string | number
  url: string
  title: string
}

export type MovedItemInfo = {
  item?: PlaylistItemData; newIndex?: number
}

export type SocketStatus = {
  type?: 'player' | 'time' | 'moveItem'
  event?: number
  timestamp?: number
} & MovedItemInfo

export type LoginObject = {
  email: string
  password: string
}

export type SignUpObject = {
  username: string
  color: string
  repeat: string
} & LoginObject

