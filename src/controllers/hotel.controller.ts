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

export const updateHotelById = async (req: Request, res: Response) => {
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

export const deleteHotelById = async (req: Request, res: Response) => {
    try {
        await HotelModel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            data: error,
        })
    }
}

export const getHotelById = async (req: Request, res: Response) => {
    try {
        const hotel = await HotelModel.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                hotel,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            data: error,
        })
    }
}

export const getAllHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await HotelModel.find()

        res.status(200).json({
            status: 'success',
            results: hotels.length,
            data: {
                hotels,
            },
        })
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            data: error,
        })
    }
}
