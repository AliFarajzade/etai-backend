import { Request, Response } from 'express'
import HotelModel from '../models/hotel.model'

export const createNewHotel = async (req: Request, res: Response) => {
    try {
        const newHotel = await HotelModel.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                hotel: newHotel,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            data: error,
        })
    }
}

export const updateHotel = async (req: Request, res: Response) => {
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )

        res.status(200).json({
            status: 'success',
            data: {
                hotel: updatedHotel,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            data: error,
        })
    }
}
