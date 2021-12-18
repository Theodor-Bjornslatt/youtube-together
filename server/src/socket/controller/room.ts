import { Socket } from 'socket.io'

interface IUser {
  name: string
  id: number
  room: string
}

type ISocket = Socket & IUser

export function onJoinRoom(this: ISocket, { room }: IUser): void {
  this.join(room)
  console.log(`${this.name} joined ${room} with socket id: ${this.id}`)
}

export function onLeaveRoom(this: Socket, { name, room }: IUser): void {
  this.leave(room)
  console.log(`${name} leaved ${room} with socket id: ${this.id}`)
}
