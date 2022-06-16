import bcrypt from 'bcryptjs'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model'
import { TUser } from '../types/user.types'

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

export const logInUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        if (!req.body.username || !req.body.password)
            return next({
                statusCode: 400,
                message: 'Username or password is missing.',
            })

        const user = (await UserModel.findOne({
            username: req.body.username,
        })) as unknown as TUser

        console.log(user)

        if (!user) return next({ statusCode: 404, message: 'User not found' })

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!isPasswordCorrect)
            return next({ statusCode: 401, message: 'Wrong password' })

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET as string
        )

        res.cookie('access_token', token, {
            httpOnly: true,
        })
            .status(200)
            .json({
                status: 'success',
                message: 'User logged in successfully',
                user: {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                },
            })
    } catch (error) {
        next(error)
    }
}
