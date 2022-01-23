import { IN_PROD } from './app'

const ORIGIN = IN_PROD
  ? 'https://watch.alexcode.ninja'
  : 'http://localhost:3000'

export const CORS_OPTIONS = {
  origin: ORIGIN,
  credentials: true
}
