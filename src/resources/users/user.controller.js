import bcrypt from 'bcryptjs'
import dbConnection from '../../database'
import util from 'util'
import jwt from 'jsonwebtoken'

const userController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const userExist = await query(`select * from users where id = ${id}`)

        if(userExist){
            res.send('user alredy exists')
        }

        const data = req.body
        const keys = Object.keys(data)
        let columns = ''
        keys.forEach(key => columns += key)
        let values = ''
        keys.forEach((key, index) => {
            values += `${data[key]},`
        })
        
        const result = query(`INSERT INTO USERS (${columns}) values (${data})`)  

        res.send(result)
    },
    async sigIn(req, res){
        
    },
    async update(req, res){
        
    },
    async delete(req, res){
        
    },
    async getSingle(req, res){
        
    },
    async getAll(req, res){
        
    }
}

export default userController