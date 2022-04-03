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
    role: String
})

export const UserInActivity = new mongoose.model('UserInActivity', schema)