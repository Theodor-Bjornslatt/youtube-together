// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express'

import { User } from '../models'
import { validateEmail, logIn } from '../../validation'
import { encrypt } from '../../util/crypt'
import log from '../../logger'

const apiRegisterUser = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  try {
    const { username, password, email } = req.body

    if (!username || !password || !email || !validateEmail(email)) {
      return res.status(400).json({ message: 'Missing parameters' })
    }

    const found = await User.findOne({ email })
    if (found) {
      return res.status(400).json({ message: 'Invalid email' })
    }
    const user = new User({
      username,
      password: encrypt(password),
      email
    })

    await user.save()

    return res.status(201).json({ message: 'OK' })
  } catch (error) {
    log.error(error)
    return res.status(500).json({ message: 'Something went wrong on server' })
  }
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
    console.log(`other`, other)
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
