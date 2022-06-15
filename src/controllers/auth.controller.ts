import bcrypt from 'bcryptjs'
import { NextFunction, Request, Response } from 'express'
import UserModel from '../models/user.model'

export const registerNewUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    try {
        await UserModel.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        res.status(201).json({
            status: 'success',
            message: 'User created successfully',
        })
    } catch (error) {
        next(error)
    }
}
