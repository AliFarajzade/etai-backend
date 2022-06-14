import { Router } from 'express'
import * as hotelController from '../controllers/hotel.controller'

const router = Router()

router.route('/').post(hotelController.createNewHotel)

router
    .route('/:id')
    .patch(hotelController.updateHotel)
    .delete(hotelController.deleteHotel)

export default router
