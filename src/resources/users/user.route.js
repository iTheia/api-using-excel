import express from 'express'
import controller from './user.controller'

const userRoute = express.Router()

userRoute.route('/')
    .get(controller.create)

export default userRoute
