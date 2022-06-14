import { model, Schema } from 'mongoose'

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
    },
    distance: {
        type: String,
        required: true,
        trim: true,
    },
    photos: [String],
    description: {
        type: String,
        trim: true,
        required: true,
        minlength: 15,
        maxlength: 150,
    },
    rating: {
        type: Number,
        default: 0,
        min: 1,
        max: 5,
    },
    rooms: [String],
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
})

const HotelModel = model('Hotel', HotelSchema, 'hotels')

export default HotelModel
