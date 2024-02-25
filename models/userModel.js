import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User