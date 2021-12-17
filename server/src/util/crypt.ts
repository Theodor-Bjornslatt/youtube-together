import crypto from 'crypto-js'

const { CRYPT_SECRET = 'monkey' } = process.env

const encrypt = (password: string): string => {
  return crypto.AES.encrypt(password, CRYPT_SECRET).toString()
}

const decrypt = (password: string) => {
  const decryptPassword = crypto.AES.decrypt(password, CRYPT_SECRET)
  return decryptPassword.toString(crypto.enc.Utf8)
}

const compare = (password: string, decryptedPassword: string): boolean => {
  return password === decrypt(decryptedPassword)
}

export { encrypt, compare }
