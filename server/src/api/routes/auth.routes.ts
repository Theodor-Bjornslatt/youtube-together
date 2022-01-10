import { Router } from 'express'

import AuthController from '../controller/auth.controller'
import { guest, member, catchAsync } from '../../middleware'

const router = Router()

router
  .route('/register')
  .post(guest, catchAsync(AuthController.apiRegisterUser))

router.route('/login').post(guest, catchAsync(AuthController.apiLoginUser))
router.route('/logout').post(member, catchAsync(AuthController.apiLogoutUser))
router.route('/whoami').get(member, catchAsync(AuthController.apiWhoAmI))

export default router
