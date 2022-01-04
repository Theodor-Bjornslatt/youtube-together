import { Request, Response } from 'express'

import { getAllRooms } from '../services'

const apiGetAllRoutes = (req: Request, res: Response): void => {
  const rooms = getAllRooms()
  res.json({ rooms })
}

const room = { apiGetAllRoutes }

export default room
