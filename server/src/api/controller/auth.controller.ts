import { Request, Response } from 'express'

import { logIn, logOut } from '../../validation'
import {
  loginUserService,
  registerUserService,
  whoamiService
} from '../services/auth.services'

const apiRegisterUser = async (req: Request, res: Response): Promise<void> => {
  const user = await registerUserService(req.body)
  logIn(req, user)
  res.status(201).json({ id: user._id, ...user })
}

const apiLoginUser = async (req: Request, res: Response): Promise<void> => {
  const user = await loginUserService(req.body)
  logIn(req, user)
  res.status(200).json({ id: user._id, ...user })
}

const apiLogoutUser = async (req: Request, res: Response): Promise<void> => {
  await logOut(req, res)
  res.json({ message: 'OK' })
}

const apiWhoAmI = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.session
  const user = await whoamiService(userId)
  res.json(user)
}

const auth = {
  apiRegisterUser,
  apiLoginUser,
  apiLogoutUser,
  apiWhoAmI
}

export default auth
