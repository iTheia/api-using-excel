import bcrypt from 'bcryptjs'
import dbConnection from '../../database'
import util from 'util'
import jwt from 'jsonwebtoken'

const applicationsController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const del = await query ( `delete  TECHNOLOGY where id = ${id}` )
        const post = await query ( `INSERT INTO  TECHNOLOGY (${columnas}) VALUES (${datos})` )
        const get = await query ( `delete  TECHNOLOGY where id = ${id}` )
        const put = await query ( `delete  TECHNOLOGY where id = ${id}` )
        res.send('variable')
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

export default applicationsController