import * as service from '../service/activity-service.js'

export const create = async(req, res) => {
    let activity = req.body
    let response = await service.create(activity)
    res.statusCode = 201
    res.send(response)
}

export const adduser = async(req, res) => {
    let activity = req.body
    let response = await service.adduser(activity)
    await service.notifyUser({
        user_id: activity.user_id,
        activity_id: activity.activity_id,
        description: "You were included in an activity as " + activity.role,
    })
    res.statusCode = 201
    res.send(response)
}

export const addcomment = async(req, res) => {
    let comment = req.body
    let response = await service.addcomment(comment)

    let users = await getAllUsersInActivity(comment.activity_id)

    for (const user of users) {
        await service.notifyUser({
            user_id: user.user_id,
            activity_id: comment.activity_id,
            description: "Someone commented in an activity you're into"
        })
    }
    res.send(response)
}

export const getAllFromId = async(req, res) => {
    let response = await service.getAllFromId(req.params.id)
    res.send(response)

}

export const getActivityFull = async(req, res) => {
    let response = await service.getActivityFull(req.params.id)
    res.contentType('json')
    console.log(response)
    res.json(response)
}

export const getAllUsersInActivity = async(activity_id) => {
    return await service.getAllUsersInActivity(activity_id)
}

//nao alterei ainda
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