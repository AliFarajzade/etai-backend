import { NextFunction, Request, Response } from 'express'
import HotelModel from '../models/hotel.model'
import RoomModel from '../models/room.model'

export const createNewRoom = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const newRoom = await RoomModel.create(req.body)
        await HotelModel.findByIdAndUpdate(req.params.hotelId, {
            $push: { rooms: newRoom._id },
        })

        res.status(201).json({
            status: 'success',
            data: {
                room: newRoom,
            },
        })
    } catch (error) {
        next(error)
    }
}

export const updateRoomById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const updatedRoom = await HotelModel.findByIdAndUpdate(
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
                hotel: updatedRoom,
            },
        })
    } catch (error) {
        next(error)
    }
}

export const deleteRoomById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await RoomModel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        next(error)
    }
}

export const getRoomById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const room = await RoomModel.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                room,
            },
        })
    } catch (error) {
        next(error)
    }
}

export const getAllRooms = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const rooms = await RoomModel.find()

        res.status(200).json({
            status: 'success',
            results: rooms.length,
            data: {
                rooms,
            },
        })
    } catch (error) {
        next(error)
    }
}
