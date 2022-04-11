import { ConnectDatabase } from '../service/db.js'
import * as service from '../service/user-service.js'

export const create = async(req, res) => {
    let user = req.body
    if (user.name != null && user.password != null) {
        let response = await service.create(user)
        res.statusCode = 201
        res.send(response)

    } else {
        res.statusCode = 500
        res.send({ error: "Dados invalidos.", dados: user })
    }
}

export const update = async(req, res) => {
    let user = req.body
    let response = await service.update(user)
    res.statusCode = 200
    res.send(response)
}

export const deleteById = async(req, res) => {
    if (req.params.id != null) {
        let response = await service.deleteById(req.params.id)
        res.statusCode = 200
        res.send(response)
    } else {
        res.statusCode = 500
        res.send({ status: 'requisição invalida' })
    }
}

export const getNotification = async(req, res) => {
    if (req.params.id != null) {
        let response = await service.getNotification(req.params.id)
        res.statusCode = 200
        res.send(response)
    } else {
        res.statusCode = 500
        res.send({ status: 'requisição invalida' })
    }
}

export const getAll = async(req, res) => {
    let response = await service.getAll()
    res.send(response)
}

export const authUser = async(req, res) => {
    let user = req.body
    if (user.name != null && user.password != null) {

        let response = await service.authUser(user)
        if (response.length > 0) {
            res.cookie('userData', JSON.stringify(response[0]))
            res.send(response[0])
        } else res.send({
            "error": "Dados invalidos"
        })
    }
}