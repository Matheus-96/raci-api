import { Router } from "express"
import * as controller from '../controller/user-controller.js'

export const userRoutes = Router()

userRoutes.post('/create', (req, res) => {
    controller.create(req, res)
})

userRoutes.put('/update', (req, res) => {
    controller.update(req, res)
})

userRoutes.delete('/delete/:id', (req, res) => {
    controller.deleteById(req, res)
})

userRoutes.get('/all', (req, res) => {
    controller.getAll(req, res)
})

userRoutes.post('/auth', (req, res) => {
    controller.authUser(req, res)
})

userRoutes.get('/notification/:id', (req, res) => {
    controller.getNotification(req, res)
})