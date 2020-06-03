import config from './config'
import jwt from 'jsonwebtoken'

export const authorization = (req, res, next) =>{
    const token = req.header('x-acces-token')
    if(!token){
        return res.status(401).send('You must sign in first')
    }
    try {
        const userInfo = jwt.verify(token, config.secret.TOKEN)
        req.user = userInfo
        next()
    } catch (error) {
        res.status(400).send('Your session has expired')
    }
}

export const catchErrors = fn =>{
    return async (req, res, next) =>{
        try {
            await fn(req, res)
        } catch (error) {
            next(error)
        }
    } 
}
