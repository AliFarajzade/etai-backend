import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './app'

dotenv.config({
    path: `${__dirname}/../.env`,
})

const connectionURL = process.env.DB_CONNECTION_URL?.replace(
    '<password>',
    process.env.DB_CONNECTION_PASSWORD as string
) as string

mongoose
    .connect(connectionURL)
    .then(() => console.log('Connection with db has been established.'))
    .catch(err => console.log(err))

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})
