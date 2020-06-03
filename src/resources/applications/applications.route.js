import express from 'express'
import controller from './applications.controller'

const userRoute = express.Router()

userRoute.route('/')
    .get(controller.getAll)
    .post(controller.create)
    
/* id comes from req.params.id */
userRoute.route('/:id')
    .put(controller.update)
    .delete(controller.delete)
    .delete(controller.getSingle)


export default userRoute
