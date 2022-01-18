export type Room = {
  name: string
  online: string
  playlist?: Playlist[]
  nickname: string
  cover: string
}

export type Playlist = {
  url: string
  id: string
  title: string
}

export type SocketStatus = {
  type?: string
  event?: number
  timestamp?: number
}
