import { model, Schema } from 'mongoose'

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        default: 1,
    },
    roomNumbers: [
        {
            number: Number,
            unavailableDates: [Date],
        },
    ],
})

const RoomModel = model('Room', RoomSchema, 'rooms')

export default RoomModel
