import express from "express"
import { userRoutes } from './routes/user-route.js'
import { activityRoutes } from "./routes/activity-route.js"
import dotenv from 'dotenv'

dotenv.config()
const app = express()

app.use(express.json())
app.use('/user', userRoutes)
app.use('/activity', activityRoutes)

app.get('/', (req, res) => {
    res.statusCode = 200
    res.send("API WORKING")
})

app.listen(8000)