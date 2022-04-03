import { Router } from "express"
import * as controller from '../controller/activity-controller.js'

export const activityRoutes = Router()

activityRoutes.post('/create', (req, res) => {
    controller.create(req, res)
})

activityRoutes.post('/adduser', (req, res) => {
    controller.adduser(req, res)
})

activityRoutes.put('/update', (req, res) => {
    controller.update(req, res)
})

activityRoutes.post('/addcomment', (req, res) => {
    controller.addcomment(req, res)
})

activityRoutes.get('/getall/:id', (req, res) => {
    controller.getAllFromId(req, res)
})

activityRoutes.get('/:id', (req, res) => {
    controller.getActivityFull(req, res)
})