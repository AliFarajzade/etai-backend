import { Router } from 'express'
import * as roomController from '../controllers/room.controller'
import { verifyAdmin, verifyToken } from '../middlewares/verify.middleware'

const router = Router()

router.route('/').get(roomController.getAllRooms)

router
    .route('/:hotelId')
    .post(verifyToken, verifyAdmin, roomController.createNewRoom)

router
    .route('/:id')
    .delete(verifyToken, verifyAdmin, roomController.deleteRoomById)
    .patch(verifyToken, verifyAdmin, roomController.updateRoomById)
    .get(roomController.getRoomById)

export default router
