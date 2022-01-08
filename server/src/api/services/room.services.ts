import { BadRequest } from '../../errors'
import { getIo } from '../../socket/io'
// eslint-disable-next-line import/no-cycle
import { validatePlaylist } from '../../validation/playlist'
import { Playlist } from '../models/playlist.model'

type RoomObject = {
  [key: string]:
    | string[]
    | string
    | number
    | { users: string | string[]; size: number }
}

type FilterParams = {
  id?: string
  limit?: string
  skip?: string
}

export const getAllRooms = (params?: FilterParams): RoomObject => {
  const { id } = params || {}
  const io = getIo()
  const { rooms } = io.sockets.adapter
  const iterableRooms = [...rooms.entries()]

  let userRooms: typeof iterableRooms

  if (id) {
    userRooms = iterableRooms.filter((ab) => {
      return ab[0] === `#${id}`
    })
  } else {
    userRooms = iterableRooms.filter((ab) => {
      return ab[0][0] === '#'
    })
  }

  if (!userRooms.length) return {}

  const roomsObj: RoomObject = {}
  userRooms.forEach((room) => {
    const roomName = room[0]
    const users = [...room[1]]
    roomsObj[roomName] = {
      users: users.map((userId) => {
        return io.sockets.sockets.get(userId)?.data.username
      }),
      size: users.length
    }
  })

  return roomsObj
}
export type UrlObject = {
  id: number
  url: string
}
export type PlaylistObject = {
  name: string
  url: UrlObject[]
}

const validate = async ({ name, url }: PlaylistObject) => {
  if (!name || !url) throw new BadRequest('missing params')
}
export const postPlayList = async (body: PlaylistObject): Promise<void> => {
  const { name, url } = body
  await validate({ name, url })
  const playlist = new Playlist({
    name,
    url
  })
  // validation
  await playlist.save()

  // validatePlaylist(body)
}
