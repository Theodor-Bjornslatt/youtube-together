import { Request, Response } from 'express'

import { User } from '../models'
import { validateEmail } from '../../validation'
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

const auth = {
  apiRegisterUser
}

export default auth
