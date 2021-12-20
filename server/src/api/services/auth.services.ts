/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { BadRequest } from '../../errors'
import { encrypt } from '../../util'
import { registerSchema, validate } from '../../validation'
import { User, UserDocument } from '../models'

export const loginUserService = async ({
  email,
  password
}: UserDocument): Promise<UserDocument> => {
  if (!email || !password) {
    throw new BadRequest('NO')
  }
  const user = await User.findOne({ email })
  if (!user || !user.matchesPassword(password)) {
    throw new BadRequest('NO')
  }

  const newLocal = user._doc
  const { password: pwd, createdAt, updatedAt, __v, ...other } = newLocal
  return other
}

export const registerUserService = async (
  reqUser: UserDocument
): Promise<UserDocument> => {
  await validate(registerSchema, reqUser)
  const { username, password, email } = reqUser

  const found = await User.exists({ email })
  if (found) {
    throw new BadRequest('Invalid email')
  }
  const user = new User({
    username,
    password: encrypt(password),
    email
  })

  const savedUser = await user.save()
  return savedUser
}
