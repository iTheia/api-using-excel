import dbConnection from '../../database'
//import dbOracleConnection from '../../databaseOracle'
import util from 'util'

const applicationsController = {
    async create(req, res){
        const connection = await dbConnection()
        

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
        const value = await connection.execute(`INSERT INTO APPLICATIONS (${columns}) values (${values})`  )
        console.log('Create', value);
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
            set += (index === keys.length- 1)? `${key} = '${data[key]}'` : `${key} = '${data[key]}',`
        })

        const value = await query ( `UPDATE APPLICATIONS SET ${set} where id = ${id}` )
        res.send(value)
    },
    async base(req, res){
        const connection = await dbConnection()
        const test =  await connection.execute(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS where table_name='APPLICATIONS'`)
        console.log(test);
        let empty = {}
        test.forEach(column =>{        
            empty[column.COLUMN_NAME] = ''
        })
       
        res.send(empty)
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
        
        
        const value = await connection.execute( `SELECT * FROM APPLICATIONS` )
        //console.log(value);
        res.send(value)
    },
    async getSingle(req, res){
        const connection = await dbConnection()
        const id = req.params.id

        const value = await connection.execute( `SELECT * FROM APPLICATIONS where id = ${id}` )
        console.log(value);
        res.send(value[0])
    },
}

export default applicationsController