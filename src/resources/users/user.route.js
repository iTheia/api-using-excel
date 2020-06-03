import express from 'express'
import controller from './user.controller'

const userRoute = express.Router()

userRoute.route('/')
    .get(controller.getDashboard)
    .post(controller.create)
    
/* id comes from req.params.id */
userRoute.route('/:id')
    .put(controller.update)
    .delete(controller.delete)


export default userRoute
