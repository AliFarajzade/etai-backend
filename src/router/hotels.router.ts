import { Router } from 'express'
import * as hotelController from '../controllers/hotel.controller'

const router = Router()

router
    .route('/')
    .post(hotelController.createNewHotel)
    .get(hotelController.getAllHotels)

router
    .route('/:id')
    .patch(hotelController.updateHotelById)
    .delete(hotelController.deleteHotelById)
    .get(hotelController.getHotelById)

export default router
