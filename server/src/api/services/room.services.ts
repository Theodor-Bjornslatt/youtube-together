import { getIo } from '../../socket/io'

type RoomObject = {
  [key: string]:
    | string[]
    | string
    | number
    | { users: string | string[]; size: number }
}
export const getAllRooms = (): RoomObject => {
  const io = getIo()
  const { rooms } = io.sockets.adapter

  const iterableRooms = [...rooms.entries()]

  const userRooms = iterableRooms.filter((ab) => {
    return ab[0][0] === '#'
  })

  const roomsObj: RoomObject = {}
  userRooms.forEach((room) => {
    const roomName = room[0]
    const users = [...room[1]]
    roomsObj[roomName] = {
      users: users.map((id) => {
        return io.sockets.sockets.get(id)?.data.username
      }),
      size: users.length
    }
  })

  return roomsObj
}
