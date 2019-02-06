import express from  'express'
import path from 'path'
import config from 'config'
import cors from 'cors'
import bodyParser from 'body-parser'
var publicRouter = express.Router()

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: config.bodyParserLimit}))
app.use(express.static(path.join(__dirname, '/../../build')))

export const healthApiRoute = '/api/health'

publicRouter.get(healthApiRoute, (req, res) => {
    res.send({
        apiStatus: "Healthy!"
    })
})
app.use('/', publicRouter)

export default app;