import dbConnection from '../../database'
import conection from '../../database'

const controller = {
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
        const id = req.params.id
        let data = controller.getData()
        const index = data.findIndex(item => item.id === id)
        data[index] = req.body
        controller.writeData(data)
        res.send(data[index])
    },
    async base(req, res){
        const connection = await dbConnection()
        const test =  await connection.execute(`SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS where table_name='APPLICATIONS'`)
        console.log(test);
        let empty = {}
        keys.forEach(column =>{        
            empty[column] = ''
        })
        res.send(empty)
    },
    async delete(req, res){
        const id = req.params.id
        let data = controller.getData()
        const index = data.findIndex(item => item.id === id)
        if(index > -1){
            data.splice(index,1)
        }
        controller.writeData(data)
        res.send('deleted')
        
    },
    async getAll(req, res){
        const connection = await dbConnection()
        const value = await connection.execute( `SELECT * FROM APPLICATIONS` )
        console.log(value);
        res.send(value)
    },
    async getSingle(req, res){
        const connection = await dbConnection()
        const id = req.params.id

        const value = await connection.execute( `SELECT * FROM APPLICATIONS where id = ${id}` )
        console.log(value);
        res.send(value[0])
    },
    writeData(data){
        const newWB = XLSX.utils.book_new()
        const newWS = XLSX.utils.json_to_sheet(data)
        XLSX.utils.book_append_sheet(newWB,newWS,"data")
        XLSX.writeFile(newWB, path.join(__dirname, 'excel.xlsx'))
    }
}

export default controller