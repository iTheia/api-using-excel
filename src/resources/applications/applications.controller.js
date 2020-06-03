import dbConnection from '../../database'
import util from 'util'

const applicationsController = {
    async create(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const data = req.body
        const keys = Object.keys(data)

        let columns = ''
        keys.forEach((key, index) => {
            columns += (index === keys.length -1)? key : `${key},`
        })
        let values = ''
        keys.forEach((key, index) => {
            values += (index === keys.length- 1)? data[key] : `${data[key]},`
        })

        const value = await query (`INSERT INTO APPLICATIONS (${columns}) values (${values})`  )
        res.send(value)
    },
    async update(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        
        const data = req.body
        const keys = Object.keys(data)
        const id = req.params.id

        let set = ''
        keys.forEach((key, index) => {
            values += (index === keys.length- 1)? `${key} = '${data[key]}'` : `${key} = '${data[key]}',`
        })

        const value = await query ( `UPDATE APPLICATIONS SET ${set} where id = ${id}` )
        res.send(value)
    },
    async delete(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)

        const id = req.params.id
        const value = await query ( `delete  APPLICATIONS where id = ${id}` )

        res.send(value)
        
    },
    async getAll(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        
        const value = await query ( `SELECT * FROM APPLICATIONS` )
        res.send(value)
    },
    async getSingle(req, res){
        const connection = await dbConnection()
        const query = util.promisify(connection.query).bind(connection)
        const id = req.params.id

        const value = await query ( `SELECT * FROM APPLICATIONS where id = ${id}` )
        res.send(value)
    },
}

export default applicationsController