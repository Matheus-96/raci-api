import express from "express"
import { userRoutes } from './routes/user-route.js'
import { activityRoutes } from "./routes/activity-route.js"
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser"


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/user', userRoutes)
app.use('/activity', activityRoutes)

app.get('/', (req, res) => {
    res.statusCode = 200
    res.send(`API para matriz RACI desenvolvida por Victor Matheus pode acessar o endpoint https://raci-api.herokuapp.com/user/all para testar o funcionamento :D`)
})

app.listen(process.env.PORT || 3001)