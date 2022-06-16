import { TUser } from './src/types/user.types'

declare global {
    namespace Express {
        interface Request {
            userCredentials?: Pick<TUser, '_id' | 'isAdmin'>
        }
    }
}
