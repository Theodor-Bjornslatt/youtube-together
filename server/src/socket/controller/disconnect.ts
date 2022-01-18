import { Socket } from 'socket.io'

import log from '../../logger'
import { getIo } from '../io'
import { findNewHost } from './room'

export async function onDisconnect(this: Socket): Promise<void> {
  const io = getIo()

  log.info(`${this.data.username} disconnected`)

  const currentRoom = [...this.rooms].find((room) => {
    return this.id !== room
  })

  if (!currentRoom) return

  const newHost = await findNewHost(currentRoom)
  io.to(currentRoom).emit('leave-room', { user: this.data.username, newHost })
}
