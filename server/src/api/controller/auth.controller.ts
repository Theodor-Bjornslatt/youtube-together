// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express'

import { encrypt } from '../../util/crypt'
import log from '../../logger'
import { User } from '../models'
import { logIn, registerSchema, validate } from '../../validation'
import { BadRequest } from '../../errors'

// fix error handler
const apiRegisterUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  await validate(registerSchema, req.body)
  const { username, password, email } = req.body

  const found = await User.exists({ email })
  if (found) {
    throw new BadRequest('Invalid email')
  }
  const user = new User({
    username,
    password: encrypt(password),
    email
  })

  await user.save()

  return res.status(201).json({ user: user._doc })
}

const apiLoginUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing parameters' })
  }

  try {
    const user = await User.findOne({ email })
    if (!user || !user.matchesPassword(password)) {
      return res.status(401).json({ message: 'Bad credentials' })
    }

    const { password: pwd, createdAt, updatedAt, __v, ...other } = user._doc
    logIn(req, other)
    return res.status(200).json(other)
  } catch (error) {
    log.error(error)
    return res.status(500).json({ message: 'Something went wrong on server' })
  }
}

const auth = {
  apiRegisterUser,
  apiLoginUser
}

export default auth
