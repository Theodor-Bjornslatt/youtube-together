export type PaginationData = {
  limit?: number
  page?: number
}


// Room
export type Room = {
  name: string
  online: string
  playlist?: Playlist[]
  nickname: string
  cover: string
}

export type Rooms = {
  rooms: Room[]
}

export type RoomResponse = Rooms & PaginationData

export type PostRoomData = {
  name: string
  nickname: string
  playlist?: PlaylistItemData[]
}


//Message
export type MessageData = {
  username: string
  message: string
  timestamp: number
  id?: string
  color?: string
  room?: string
}

export type Messages = {
  messages: MessageData[]
}

export type MessageResponse = {
  room?: string
} & Messages & PaginationData

export type RandomMessageQuery = {
  query?: string
  room?: string | null
  random?: number
}

// Playlist
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
  item?: PlaylistItemData
  newIndex?: number
}


// User
export type LoginObject = {
  email: string
  password: string
}

export type SignUpObject = {
  username: string
  color: string
  repeat: string
} & LoginObject

export type User = {
  _id?: string
  username: string
  email: string
  color: string
}

// Socket
export type SocketStatus = {
  type?: 'player' | 'time' | 'moveItem'
  event?: number
  timestamp?: number
} & MovedItemInfo
