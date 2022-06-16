import { Router } from 'express'
import * as hotelController from '../controllers/hotel.controller'
import { verifyAdmin, verifyToken } from '../middlewares/verify.middleware'

const router = Router()

router
    .route('/')
    .post(verifyToken, verifyAdmin, hotelController.createNewHotel)
    .get(hotelController.getAllHotels)

router
    .route('/:id')
    .patch(verifyToken, verifyAdmin, hotelController.updateHotelById)
    .delete(verifyToken, verifyAdmin, hotelController.deleteHotelById)
    .get(hotelController.getHotelById)

export default router
