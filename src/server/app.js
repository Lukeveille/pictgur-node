import express from  'express'
import path from 'path'
import config from 'config'
import cors from 'cors'
import bodyParser from 'body-parser'
import pictureRouter from './api/routes/pictures'
import userRouter from './api/routes/users'
const publicRouter = express.Router()
const apiRouter = express.Router()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: config.bodyParserLimit}))
app.use(express.static(path.join(__dirname, '/../../build')))

app.use('/api', apiRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/pictures', pictureRouter);

apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    apiStatus: "Healthy!"
  })
})
app.use('/', publicRouter)

export default app;