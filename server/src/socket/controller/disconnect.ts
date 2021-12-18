import { ISocket } from '../../interfaces'

export function onDisconnect(this: ISocket): void {
  console.log(
    `${this.name} ${this.id} disconnected  with socket id: ${this.id}`
  )
}
