import { Socket } from 'socket.io'
import { Document } from 'mongoose'

export interface ISocket extends Socket {
  username?: string | string[]
  color?: string | string[]
}

export interface IError extends Error {
  status?: number
}

export interface IUser extends Document {
  _id: string
  email: string
  username: string
  password: string
  color: string
}

export interface IClient {
  username: string | string[]
  color: string | string[] | undefined
}

export interface IData extends IClient {
  room: string
}

export interface IPlayList {
  _id: string
  url: string
  title: string
  position?: number
  id?: string
}
export interface IRoom extends Document {
  _id?: string
  name: string
  playlist: IPlayList[]
  online?: number
  nickname: string
}
export interface IMessage extends Document {
  id: string
  username: string
  message: string
  color: string
  timestamp: number
  room?: string
}

export interface IRoomObject {
  rooms: IRoom[] | any[]
  limit?: number
  page?: number
}
