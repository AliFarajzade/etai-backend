import { Router } from 'express'
import * as userController from '../controllers/user.controller'
import { verifyToken, verifyUser } from '../middlewares/verify.middleware'

const router = Router()

router
    .route('/:id')
    .patch(verifyToken, verifyUser, userController.updateUserById)
    .delete(verifyToken, verifyUser, userController.deleteUserById)
    .get(userController.getUserById)

export default router
