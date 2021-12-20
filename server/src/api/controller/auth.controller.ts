// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express'

import { logIn } from '../../validation'
import {
  loginUserService,
  registerUserService
} from '../services/auth.services'

const apiRegisterUser = async (req: Request, res: Response): Promise<void> => {
  const user = await registerUserService(req.body)
  logIn(req, user)
  res.status(201).json({ user })
}

const apiLoginUser = async (req: Request, res: Response): Promise<void> => {
  const user = await loginUserService(req.body)
  logIn(req, user)
  res.status(200).json({ user })
}

const auth = {
  apiRegisterUser,
  apiLoginUser
}

export default auth
