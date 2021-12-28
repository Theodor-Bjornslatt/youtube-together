export = {}
declare module 'express-session' {
  interface SessionData {
    admin: boolean
    userId: string
  }
}
