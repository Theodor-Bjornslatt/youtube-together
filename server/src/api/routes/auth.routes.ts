import { Router } from 'express'

import AuthCtrl from '../controller/auth.controller'

const router = Router()

router.route('/register').post(AuthCtrl.apiRegisterUser)
router.route('/login').post(AuthCtrl.apiLoginUser)

export default router
