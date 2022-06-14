import { Router } from 'express'
import * as hotelController from '../controllers/hotel.controller'

const router = Router()

router.route('/').post(hotelController.createNewHotel)

router
    .route('/:id')
    .patch(hotelController.updateHotelById)
    .delete(hotelController.deleteHotelById)

export default router
