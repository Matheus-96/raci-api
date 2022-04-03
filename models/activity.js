import mongoose from "mongoose"

const schema = new mongoose.Schema({
    title: String,
    description: String,
    dateCreated: { type: Date, default: Date.now() },
    status: String

})

export const Activity = new mongoose.model('Activity', schema)