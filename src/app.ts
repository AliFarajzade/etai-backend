import cookieParser from 'cookie-parser'
import express, { NextFunction, Request, Response } from 'express'
import authRouter from './router/auth.router'
import hotelsRouter from './router/hotels.router'
import roomsRouter from './router/rooms.router'
import usersRouter from './router/users.router'

const app = express()

// Body parser middleware
app.use(express.json())
app.use(cookieParser())

// General router middlewares
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/rooms', roomsRouter)
app.use('/api/v1/hotels', hotelsRouter)

app.use('*', (_req: Request, res: Response) => {
    res.status(404).json({
        status: 'fail',
        message: 'No such route is available.',
    })
})

app.use(
    (
        err: { statusCode?: number; message?: string },
        _req: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _next: NextFunction
    ) => {
        res.status(err.statusCode ?? 500).json({
            status: 'fail',
            message: err.message ?? 'Something very wrong.',
        })
    }
)

export default app
