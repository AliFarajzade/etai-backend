import { NextFunction, Request, Response } from 'express'
import UserModel from '../models/user.model'
import { TUser } from '../types/user.types'

export const updateUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const updatedUser = (await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )) as TUser

        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    name: updatedUser.name,
                    username: updatedUser.username,
                    email: updatedUser.email,
                },
            },
        })
    } catch (error) {
        next(error)
    }
}

export const deleteUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id)

        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        next(error)
    }
}

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const user = await UserModel.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                user: {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                },
            },
        })
    } catch (error) {
        next(error)
    }
}
