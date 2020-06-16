import bcrypt from 'bcryptjs'
import dbConnection from '../../database'
import util from 'util'
import jwt from 'jsonwebtoken'
import config from '../../config'

const userController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        const userExist = await query(`select * from users where email='${req.body.email}'`)
        
        if(userExist.length !== 0){
            return res.send('user alredy exists')
        }

        const data = req.body
        
        const keys = Object.keys(data)
        let columns = ''
        keys.forEach((key, index) => {
            columns += (index === keys.length -1)? key : `${key},`
        })
        let values = ''
        keys.forEach((key, index) => {
            values += (index === keys.length- 1)? `'${data[key]}'` : `'${data[key]}',`
        })
        const result = await query(`INSERT INTO USERS (${columns}) values (${values})`)  

        res.send(result)
    },
    async sigIn(req, res){
        try {
            const connection = await dbConnection()
            const result = await connection.execute(`select * from users where email='${req.body.email}'`)
            
            if(result.length === 0){
                return res.status(401).send('email or pasword are incorrect')
             }

            if(!req.body.password === result.password){
                return res.status(401).send('email or pasword are incorrect')
            }

            const token = jwt.sign({id:result.rows[0].id}, config.secret.TOKEN)
            res.header('x-acces-token', token).status(200).send(token)
        } catch (error) {
            console.log(error);
        }
    },
    async update(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        
        const data = req.body
        const keys = Object.keys(data)
        const id = req.params.id

        let set = ''
        keys.forEach((key, index) => {
            set += (index === keys.length- 1)? `${key} = '${data[key]}'` : `${key} = '${data[key]}',`
        })

        const value = await query ( `UPDATE users SET ${set} where id = ${id}` )
        res.send(value)
    },
    async delete(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const id = req.params.id
        const value = await query ( `delete  APPLICATIONS where id = ${id}` )

        res.send(value)
        
    },
    async getSingle(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        const id = req.params.id
        const user = await query(`select * from users where id = ${id}`)
        if(user.length === 0){
            return res.send('user not found')
        }
        res.send(user[0])
    },
    async getAll(req, res){
        const connection = await dbConnection()
        const value = await connection.execute( `SELECT * FROM USERS` )
        console.log(value);
        res.send(value)
    }
}

export default userController