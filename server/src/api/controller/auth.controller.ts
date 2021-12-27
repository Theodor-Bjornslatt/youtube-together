// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express'

import { logIn, logOut } from '../../validation'
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

const apiLogoutUser = async (req: Request, res: Response): Promise<void> => {
  await logOut(req, res)
  res.json({ message: 'OK' })
}

const auth = {
  apiRegisterUser,
  apiLoginUser,
  apiLogoutUser
}

export default auth
