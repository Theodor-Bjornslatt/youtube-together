import { Socket } from 'socket.io'

export interface ISocket extends Socket {
  name?: string | string[]
}

export interface IError extends Error {
  status: number
}
