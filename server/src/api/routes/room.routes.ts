import { Router } from 'express'

import RoomCtrl from '../controller/room.controller'
import { catchAsync } from '../../middleware'

const router = Router()

router.route('/rooms').get(catchAsync(RoomCtrl.apiGetAllRoutes))

export default router
