import express from 'express';

const pictureRouter = express.Router();

pictureRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Pictures show here!',
  });
});

pictureRouter.post('/', (req, res) => {
  const picture = {
    src: req.body.src,
    alt: req.body.alt
  }
  res.status(201).json({
    message: 'Posted!',
    createdPicture: picture
  });
});

pictureRouter.get('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  res.status(200).json({
    message: 'This is for picture #' + id,
  });
});

export default pictureRouter;
