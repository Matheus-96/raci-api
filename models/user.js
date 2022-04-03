import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: String,
    password: String
})

export const User = new mongoose.model('User', schema)