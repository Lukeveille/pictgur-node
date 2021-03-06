import express from  'express';
import path from 'path';
import config from 'config';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import pictureRouter from './api/routes/pictures';
import userRouter from './api/routes/users';

const publicRouter = express.Router();
const apiRouter = express.Router();
const app = express();

mongoose.connect(
  'mongodb+srv://node-shop:' +
  process.env.PICTGUR_MONGO_PW +
  '@cluster0-fvxju.mongodb.net/test?retryWrites=true',
  {
    useNewUrlParser: true
  }
)
.catch(err => { console.log(err) });

mongoose.Promise = global.Promise;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: config.bodyParserLimit}));
app.use(express.static(path.join(__dirname, '/../../build')));

// Root routes
app.use('/', publicRouter);
app.use('/api', apiRouter);

// API routes
apiRouter.use('/user', userRouter);
apiRouter.use('/pictures', pictureRouter);
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    apiStatus: "Healthy!"
  });
});

// Errors
app.use((req, res, next) => {
  const error = new Error('Could not find what you seek');
  error.status = 404;
  next(error);
});
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

export default app;
