import { User } from '../models/user.js'
import { ConnectDatabase } from '../service/db.js'

export const create = async(_user) => {
    let user = new User()
    user.name = _user.name
    user.password = _user.password
    let db = await ConnectDatabase()
    user = await user.save()
    db.disconnect()
    return user
}

export const update = async(_user) => {
    let user = new User()
    let db = await ConnectDatabase()
    user = await User.findByIdAndUpdate(_user._id, _user)
    let newUser = await User.findById(_user._id)
    db.disconnect()
    return newUser
}

export const deleteById = async(id) => {
    let user = new User()
    let db = await ConnectDatabase()
    user = await User.findByIdAndRemove(id)
    db.disconnect()
    return user
}

export const getAll = async() => {
    let db = await ConnectDatabase()
    let users = await User.find()
    db.disconnect()
    return users
}