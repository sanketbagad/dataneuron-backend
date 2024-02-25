import mongoose from "mongoose"
import dotenv from "dotenv"



const mongo_uri = process.env.MONGO_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://alencolins:pallavi@dataneuron.hsyihtc.mongodb.net/?retryWrites=true&w=majority&appName=dataneuron", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }

}


export default connectDB
