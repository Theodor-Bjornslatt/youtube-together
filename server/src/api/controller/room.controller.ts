import { Request, Response } from 'express'

import { getAllRooms, getRoomByName, postRoom } from '../services'

const apiGetAllRooms = async (req: Request, res: Response): Promise<void> => {
  const rooms = await getAllRooms()
  res.json(rooms)
}

const apiGetRoom = async (req: Request, res: Response): Promise<void> => {
  const room = await getRoomByName(req.params.id)
  res.json(room)
}

const apiPostRoom = async (req: Request, res: Response): Promise<void> => {
  await postRoom(req.body)
  res.status(200).json({ message: 'Ok!' })
}

const RoomController = { apiGetAllRooms, apiPostRoom, apiGetRoom }

export default RoomController
