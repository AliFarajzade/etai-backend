/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { TUser } from '../types/user.types'

export const verifyToken = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    const token = req.cookies.access_token
    if (!token) return next({ statusCode: 401, message: 'Unauthorized' })

    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
            if (err) return next({ statusCode: 401, message: 'Unauthorized' })
            req.userCredentials = decoded as Pick<TUser, '_id' | 'isAdmin'>
            next()
        }
    )
}
