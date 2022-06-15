import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (value: string) =>
                    /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g.test(value),
                message: 'Invalid email address',
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const UserModel = model('User', UserSchema, 'users')

export default UserModel
