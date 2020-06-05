import express from 'express'
import controller from './applications.controller'
import {catchErrors} from '../../middlewares'

const userRoute = express.Router()

userRoute.route('/')
    .get(catchErrors(controller.getAll))
    .post(catchErrors(controller.create))
    
userRoute.get('/create', catchErrors(controller.base))
userRoute.route('/:id')
    .put(catchErrors(controller.update))
    .delete(catchErrors(controller.delete))
    .get(catchErrors(controller.getSingle))


export default userRoute
