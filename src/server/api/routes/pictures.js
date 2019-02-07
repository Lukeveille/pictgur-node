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

pictureRouter.get('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  res.status(200).json({
    message: 'This is for picture #' + id,
  });
});

export default pictureRouter;