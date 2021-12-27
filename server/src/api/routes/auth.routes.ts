import { Router } from 'express'

import AuthCtrl from '../controller/auth.controller'
import { guest, member, catchAsync } from '../../middleware'

const router = Router()

router.route('/register').post(guest, catchAsync(AuthCtrl.apiRegisterUser))
router.route('/login').post(guest, AuthCtrl.apiLoginUser)
router.route('/logout').post(member, AuthCtrl.apiLogoutUser)
router.route('/whoami').get(member, AuthCtrl.apiWhoAmI)

export default router
