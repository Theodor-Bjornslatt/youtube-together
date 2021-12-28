import { IN_PROD } from './app'

const ORIGIN = IN_PROD ? 'http://localhost:3000' : 'https://alexcode.ninja'

export const CORS_OPTIONS = {
  origin: ORIGIN,
  credentials: true
}
