import { Router } from 'express'
import * as hotelController from '../controllers/hotel.controller'

const router = Router()

router.route('/').post(hotelController.createNewHotel)

export default router
