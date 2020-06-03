import express from 'express'
import userRoute from './resources/users/user.route'
import userController from './resources/users/user.controller'
import { catchErrors, authorization } from './middlewares'

const router = express.Router()

router.get('/', async (req, res)=>{
    res.send('pene')
})

router.post('/signup', catchErrors(userController.create))

router.post('/signin', catchErrors(userController.sigIn))

router.use('/users',userRoute)

export default router
                