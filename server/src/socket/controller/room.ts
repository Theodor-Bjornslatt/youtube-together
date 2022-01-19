import { Socket } from 'socket.io'

import { Message } from '../../api/models'
import { Room } from '../../api/models/room.model'
import { getRedis } from '../../db'
import { IClient, IData } from '../../interfaces'
import log from '../../logger'
import { getIo } from '../io'

const getOnlineUsers = (room: string) => {
  const io = getIo()
  const clients = io.sockets.adapter.rooms.get(room)

  const users: Array<IClient> = []

  clients?.forEach((id: string) => {
    const clientSocket = <Socket>io.sockets.sockets.get(id)
    users.push({
      username: clientSocket.data.username,
      color: clientSocket.data.color
    })
  })
  return users
}

const joinRoom = async (
  socket: Socket,
  room: string,
  users: Array<IClient>
) => {
  const alreadyJoined = users.some((user) => {
    return user.username === socket.data.username
  })
  if (!alreadyJoined) {
    socket.join(room)
    socket.to(room).emit('joined-room', {
      username: socket.data.username,
      color: socket.data.color
    })
  }
}

const getCurrentStateInRoom = async (room: string) => {
  const messages = await Message.find({ room })
    .limit(10)
    .sort({ $natural: -1 })
    .select('-_id -room -__v')
  const { playlist } = await Room.findOne({ name: room }).select('playlist')
  return { messages: messages.reverse(), playlist }
}

export async function onJoinRoom(this: Socket, data: IData): Promise<void> {
  const t1 = performance.now()

  const { room, username, color = '#ffff' } = data
  const io = getIo()

  this.data.username = username
  this.data.color = color

  const { messages, playlist } = await getCurrentStateInRoom(room)
  const users = getOnlineUsers(room)
  const redis = getRedis()
  if (!users.length) {
    redis.set(room, username)
  }

  joinRoom(this, room, users)

  const host = await redis.get(room)

  io.to(this.id).emit('pre-room', {
    users: users.filter((user) => {
      return user.username !== username
    }),
    messages,
    playlist,
    host
  })

  // measure speed
  const t2 = performance.now()
  log.info(`${t2 - t1} milliseconds to join a room`)
}

export async function onLeaveRoom(this: Socket, room: string): Promise<void> {
  const io = getIo()
  this.leave(room)
  const newHost = await findNewHost(room)
  io.to(room).emit('leave-room', { user: this.data.username, newHost })
}

export async function findNewHost(room: string): Promise<string> {
  const io = getIo()
  const redis = getRedis()
  const host = await redis.get(room)
  const clients = io.sockets.adapter.rooms.get(room)

  if (!host || !clients) return ''

  const newHostId = [...clients][0]
  const newHostName = io.sockets.sockets.get(newHostId)?.data.username as string
  redis.set(room, newHostName)

  return newHostName
}
