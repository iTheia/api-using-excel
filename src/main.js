import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import { connection} from './database'
import router from './router'
import config from './config'
import path from 'path'
const app = express()
const server = http.createServer(app)

connection()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/v1/', router)

if(app.get('env') !== 'dev'){
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'), (err) =>{
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

const port = config.port
server.listen(port)