import { Router } from 'express'

import AuthCtrl from '../controller/auth.controller'
import { guest } from '../../middleware'

const router = Router()

router.route('/register').post(guest, AuthCtrl.apiRegisterUser)
router.route('/login').post(AuthCtrl.apiLoginUser)

export default router
