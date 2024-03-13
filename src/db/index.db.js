import mongoose from 'mongoose';
import { DB_NAME} from './../constant.js'

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Connected successfully to ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(   `Failed to connect`)
    }
}

export default connectDB