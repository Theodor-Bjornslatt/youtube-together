import { Socket } from 'socket.io'

import { Message } from '../../api/models'
import { Room } from '../../api/models/room.model'
import { IClient, IData } from '../../interfaces'
import log from '../../logger'
import { getIo } from '../io'

export async function onJoinRoom(this: Socket, data: IData): Promise<void> {
  // measure speed
  const t1 = performance.now()

  const {
    room,
    username = `Guest#${(Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1)}`,
    color = '#ffff'
  } = data
  const io = getIo()

  this.data.username = username
  this.data.color = color

  const messages = await Message.find({ room })
  const { playlist } = await Room.findOne({ name: room })

  const clients = io.sockets.adapter.rooms.get(room)
  const users: Array<IClient> = []

  clients?.forEach((id: string) => {
    const clientSocket = <Socket>io.sockets.sockets.get(id)
    users.push({
      username: clientSocket.data.username,
      color: clientSocket.data.color
    })
  })

  // refactor
  const alreadyJoined = users.some((user) => {
    return user.username === username
  })

  // refactor
  if (!alreadyJoined) {
    this.join(room)
    io.to(this.id).emit('pre-room', {
      users,
      messages,
      playlist
    })
    this.to(room).emit('joined-room', { username, color })
  } else {
    const filteredUsers = users.filter((user) => {
      return user.username !== username
    })
    io.to(this.id).emit('pre-room', {
      users: filteredUsers,
      messages,
      playlist
    })
  }

  log.info(`${this.data.username} joined ${room}`)

  // measure speed
  const t2 = performance.now()
  log.info(`${t2 - t1} milliseconds to join a room`)
}

export function onLeaveRoom(this: Socket, room: string): void {
  const io = getIo()
  this.leave(room)
  io.to(room).emit('leave-room', this.data.username)
}
