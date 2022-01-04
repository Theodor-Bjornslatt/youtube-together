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
  username: string | string[] | undefined
  color: string | string[] | undefined
}

export interface IData extends IClient {
  room: string
}
