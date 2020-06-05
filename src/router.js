import express from 'express'
import userRoute from './resources/users/user.route'
import userController from './resources/users/user.controller'
import technologysRoute from './resources/technology/technology.route'
import applicationsRoute from './resources/applications/applications.route'
import { catchErrors, authorization } from './middlewares'

const router = express.Router()

router.post('/', authorization, async (req, res)=>{
    res.send('im alive')
})

router.post('/signup', catchErrors(userController.create))

router.post('/signin', catchErrors(userController.sigIn))

router.use('/applications',applicationsRoute)

router.use('/technologys',technologysRoute)

router.use('/users',userRoute)

export default router
                