import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import router from './router'
import config from './config'
import path from 'path'
import cors from 'cors'

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())
app.use('/api/v1/', router)

let root = path.join(__dirname,'../client/build')
console.log(root)
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})


const port = config.port
server.listen(port)