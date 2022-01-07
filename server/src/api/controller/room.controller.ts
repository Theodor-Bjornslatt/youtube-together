import { Request, Response } from 'express'

import { getAllRooms } from '../services'

const apiGetAllRoutes = (req: Request, res: Response): void => {
  const rooms = getAllRooms()
  res.json({ rooms })
}

const apiGetRoom = (req: Request, res: Response): void => {
  const room = getAllRooms({ id: req.params.id })
  res.json({ room })
}

const room = { apiGetAllRoutes, apiGetRoom }

export default room
