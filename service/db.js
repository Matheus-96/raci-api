import mongoose from "mongoose";

export async function ConnectDatabase() {
    return await mongoose.connect(`mongodb+srv://matheus-96:8486@cluster0.ttad1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
}