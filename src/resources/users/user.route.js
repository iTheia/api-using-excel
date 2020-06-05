import express from 'express'
import controller from './user.controller'
import { catchErrors } from '../../middlewares'

const userRoute = express.Router()

userRoute.route('/')
    .get(catchErrors(controller.getAll))
    .post(catchErrors(controller.create))
    
/* id comes from req.params.id */
userRoute.route('/:id')
    .put(controller.update)
    .delete(catchErrors(controller.delete))
    .get(catchErrors(controller.getSingle))


export default userRoute
