const {
  REDIS_PORT = 6379,
  REDIS_HOST = 'localhost',
  REDIS_PASSWORD = 'secret'
} = process.env

export const REDIS_OPTIONS = {
  port: REDIS_PORT as number,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
}
