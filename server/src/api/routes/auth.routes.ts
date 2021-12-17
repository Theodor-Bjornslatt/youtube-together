import { Router } from 'express'

import AuthCtrl from '../controller/auth.controller'

const router = Router()

router.route('/register').post(AuthCtrl.apiRegisterUser)

export default router
