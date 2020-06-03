import bcrypt from 'bcryptjs'
import dbConnection from '../../database'
import util from 'util'
import jwt from 'jsonwebtoken'

const userController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        /* const userExist = await query(`SELECT * FROM USER WHERE email =${req.email}`)

        if(userExist){
            res.send('user alredy exists')
        } */

        const data = req.body
        const keys = Object.keys(data)
        console.log(keys, data)
        let columns = ''
        keys.forEach((key, index) => {
            columns += (index === keys.length -1)? key : `${key},`
        })
        let values = ''
        keys.forEach((key, index) => {
            values += (index === keys.length- 1)? data[key] : `${data[key]},`
        })
        let sql = `insert into INSERT INTO  TECHNOLOGY (${columns}) values (${values})`  

        res.send(sql)
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