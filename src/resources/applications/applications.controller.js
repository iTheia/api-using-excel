import XLSX  from 'xlsx'
import path from 'path'

const controller = {
    async create(req, res){
        let data = controller.getData()
        const id = data[data.length - 1].id + 1
        const object = req.body
        object.id = id
        data.push(object)
        controller.writeData(data)
        res.send(object)
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
        let data = controller.getData()
        const keys = Object.keys(data[0])
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
        const data = controller.getData()
        res.send(data)
    },
    async getSingle(req, res){
        const id = req.params.id
        const data = controller.getData()
        const requestedRow = data.find(row => row.id == id)
        if(requestedRow === undefined){
            res.status(404).send({error:404})
        }
        res.send(requestedRow)
    },
    getData(){
        const excel = XLSX.readFile(path.join(__dirname, './excel.xlsx'))
        const sheet = excel.SheetNames
        return XLSX.utils.sheet_to_json(excel.Sheets[sheet[0]])
    },
    writeData(data){
        const newWB = XLSX.utils.book_new()
        const newWS = XLSX.utils.json_to_sheet(data)
        XLSX.utils.book_append_sheet(newWB,newWS,"data")
        XLSX.writeFile(newWB, path.join(__dirname, 'excel.xlsx'))
    }
}

export default controller