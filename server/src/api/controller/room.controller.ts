import { Request, Response } from 'express'

import {
  getAllRooms,
  getRoomByName,
  postRoom,
  addToPlaylist,
  updatePlaylist,
  getMessages
} from '../services'

interface IQueryProps {
  limit?: string
  page?: string
  random?: string
}

const apiGetAllRooms = async (req: Request, res: Response): Promise<void> => {
  const { limit, page }: IQueryProps = req.query
  const rooms = await getAllRooms({ limit, page })
  res.json(rooms)
}

const apiGetRoom = async (req: Request, res: Response): Promise<void> => {
  const name = req.params.id
  const room = await getRoomByName(name)
  res.json(room)
}

const apiPostRoom = async (req: Request, res: Response): Promise<void> => {
  await postRoom(req.body)
  res.status(200).json({ message: 'Ok!' })
}

const apiGetMessages = async (req: Request, res: Response): Promise<void> => {
  const name = req.params.id
  const { limit, page, random }: IQueryProps = req.query

  const messages = await getMessages({ name, limit, page, random })
  res.status(200).json({ ...messages })
}

const apiAddToPlaylist = async (req: Request, res: Response): Promise<void> => {
  const name = req.params.id
  const { item } = req.body

  await addToPlaylist({ name, item })
  res.status(200).json({ message: 'Ok!' })
}

const apiUpdatePlaylist = async (
  req: Request,
  res: Response
): Promise<void> => {
  const name = req.params.id

  await updatePlaylist({ name, item: req.body })
  res.status(200).json({ message: 'Ok!' })
}

const RoomController = {
  apiGetAllRooms,
  apiPostRoom,
  apiGetRoom,
  apiGetMessages,
  apiAddToPlaylist,
  apiUpdatePlaylist
}

export default RoomController
