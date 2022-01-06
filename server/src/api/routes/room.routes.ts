import { Router } from 'express'

import RoomCtrl from '../controller/room.controller'
import { catchAsync } from '../../middleware'

const router = Router()

router.route('/rooms').get(catchAsync(RoomCtrl.apiGetAllRoutes))
router.route('/rooms/:id').get(catchAsync(RoomCtrl.apiGetRoom))
router.route('/rooms/playlist').post(catchAsync(RoomCtrl.apiPostPlaylist))

export default router
