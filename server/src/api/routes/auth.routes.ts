import { Router } from 'express'

import AuthCtrl from '../controller/auth.controller'
import { guest, catchAsync } from '../../middleware'

const router = Router()

router.route('/register').post(guest, catchAsync(AuthCtrl.apiRegisterUser))
router.route('/login').post(guest, AuthCtrl.apiLoginUser)

export default router
