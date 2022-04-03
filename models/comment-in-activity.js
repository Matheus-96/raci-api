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
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export const CommentInActivity = new mongoose.model('CommentInActivity', schema)