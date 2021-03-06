import { NextFunction, Request, Response } from 'express'
import HotelModel from '../models/hotel.model'

export const createNewHotel = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newHotel = await HotelModel.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                hotel: newHotel,
            },
        })
    } catch (error) {
        next(error)
    }
}

export const updateHotelById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
        next(error)
    }
}

export const deleteHotelById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await HotelModel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        next(error)
    }
}

export const getHotelById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const hotel = await HotelModel.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                hotel,
            },
        })
    } catch (error) {
        next(error)
    }
}

export const getAllHotels = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
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
        next(error)
    }
}
