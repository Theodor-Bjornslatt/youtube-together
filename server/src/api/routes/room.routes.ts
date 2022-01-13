import { Router } from 'express'

import RoomController from '../controller/room.controller'
import { catchAsync } from '../../middleware'

const router = Router()

router
  .route('/rooms')
  .get(catchAsync(RoomController.apiGetAllRooms))
  .post(catchAsync(RoomController.apiPostRoom))

router.route('/rooms/:id').get(catchAsync(RoomController.apiGetRoom))

router
  .route('/rooms/:id/messages')
  .get(catchAsync(RoomController.apiGetMessages))

export default router
