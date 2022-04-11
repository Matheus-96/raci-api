import { Activity } from '../models/activity.js'
import { UserInActivity } from '../models/user-in-activity.js'
import { CommentInActivity } from '../models/comment-in-activity.js'
import { Notification } from '../models/notification.js'
import { ConnectDatabase } from './db.js'

export const create = async(_activity) => {
    let activity = new Activity()
    activity.title = _activity.title
    activity.description = _activity.description
    activity.status = 'open'
    let db = await ConnectDatabase()
    activity = await activity.save()
    db.disconnect()
    return activity
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

export const adduser = async(_user_activity) => {
    let userInActivity = new UserInActivity()
    userInActivity.user_id = _user_activity.user_id
    userInActivity.activity_id = _user_activity.activity_id
    userInActivity.role = _user_activity.role
    let db = await ConnectDatabase()
    let response = await userInActivity.save()
    db.disconnect()
    return response
}

export const notifyUser = async(data) => {
    let notification = new Notification()
    notification.title = data.title
    notification.description = data.description
    notification.activity_id = data.activity_id
    notification.user_id = data.user_id
    let db = await ConnectDatabase()
    let response = await notification.save()
    db.disconnect()
    return response
}

export const getAllFromId = async(id) => {
    let db = await ConnectDatabase()
    let response = await UserInActivity.find({ user_id: id }).populate(['user_id', 'activity_id'])
    return response
}

export const addcomment = async(_comment) => {
    let db = await ConnectDatabase()
    let comment = new CommentInActivity({
        user_id: _comment.user_id,
        activity_id: _comment.activity_id,
        comment: _comment.comment,
    })
    let response = await comment.save()
    db.disconnect()
    return response
}

export const getActivityFull = async(id) => {
    let db = await ConnectDatabase()
    let response = await Activity.findById(id)
    response = await response.toObject()
    response.comments = await CommentInActivity.find({ activity_id: id })
    db.disconnect()
    return response
}

export const getAllUsersInActivity = async(activity_id) => {
    let db = await ConnectDatabase()
    let response = await UserInActivity.find({ activity_id: activity_id })
    return response
}