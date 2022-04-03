import mongoose from "mongoose"

const schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    activity_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Activity'
    },
    title: String,
    description: String,
    read: {
        type: Boolean,
        default: false
    }
})

export const Notification = new mongoose.model('Notification', schema)