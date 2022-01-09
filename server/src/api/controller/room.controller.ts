import { Request, Response } from 'express'

import { getAllRooms, postPlayList } from '../services'

const apiGetAllRoutes = (req: Request, res: Response): void => {
  const rooms = getAllRooms()
  res.json({ rooms })
}

const apiGetRoom = (req: Request, res: Response): void => {
  const room = getAllRooms({ id: req.params.id })
  res.json({ room })
}

const apiPostPlaylist = async (req: Request, res: Response): Promise<void> => {
  await postPlayList(req.body)
  res.status(200).json({ message: 'Ok!' })
}

const room = { apiGetAllRoutes, apiPostPlaylist, apiGetRoom }

export default room
