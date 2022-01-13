import { Router } from 'express'

import RoomController from '../controller/room.controller'
import { catchAsync } from '../../middleware'

const router = Router()

router.route('/messages').get(catchAsync(RoomController.apiGetMessages))

export default router
