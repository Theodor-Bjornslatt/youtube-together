import crypto from 'crypto-js'

const { CRYPT_SECRET = 'monkey' } = process.env

const encrypt = (password: string): string => {
  return crypto.AES.encrypt(password, CRYPT_SECRET).toString()
}

export { encrypt }
