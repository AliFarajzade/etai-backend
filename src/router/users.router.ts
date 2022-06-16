import { Router } from 'express'
import * as userController from '../controllers/user.controller'

const router = Router()

router
    .route('/:id')
    .patch(userController.updateUserById)
    .delete(userController.deleteUserById)
    .get(userController.getUserById)

export default router
