import express from 'express'
import technologysRoute from './resources/technology/technology.route'
import applicationsRoute from './resources/applications/applications.route'


const router = express.Router()

router.use('/applications',applicationsRoute)

router.use('/technologys',technologysRoute)


export default router
                