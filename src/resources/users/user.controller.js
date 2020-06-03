import bcrypt from 'bcryptjs'
import dbConnection from '../../database'
import util from 'util'
import jwt from 'jsonwebtoken'

const userController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const userExist = await query('select * from test')
        /* verificar que el usuario no existe */
        if(userExist){
            res.send('user alredy exists')
        }

        res.send('asd')
    },
    async sigIn(req, res){
        
    },
    async update(req, res){
        
    },
    async delete(req, res){
        
    },
    async getDashboard(req, res){
        
    }
}

export default userController