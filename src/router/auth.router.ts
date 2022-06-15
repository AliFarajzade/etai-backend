import { Router } from 'express'
import * as authController from '../controllers/auth.controller'

const router = Router()

router.route('/register').post(authController.registerNewUser)

export default router
