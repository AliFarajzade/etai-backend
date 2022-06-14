import express, { Request, Response } from 'express'
import authRouter from './router/auth.router'
import hotelsRouter from './router/hotels.router'
import roomsRouter from './router/rooms.router'
import usersRouter from './router/users.router '

const app = express()

// Body parser middleware
app.use(express.json())

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

export default app
