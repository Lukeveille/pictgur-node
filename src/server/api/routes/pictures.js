import express from 'express';

const pictureRouter = express.Router();

pictureRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Pictures show here!',
  });
});

pictureRouter.post('/', (req, res) => {
  res.status(201).json({
    message: 'Pictures post here!',
  });
});

export default pictureRouter;