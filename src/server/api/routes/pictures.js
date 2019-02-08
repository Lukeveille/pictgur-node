import express from 'express';
import mongoose from 'mongoose';
import Picture from '../models/picture';

const pictureRouter = express.Router();

pictureRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Pictures show here!',
  });
});

pictureRouter.post('/', (req, res) => {
  const picture = new Picture({
    _id: new mongoose.Types.ObjectId(),
    src: req.body.src,
    alt: req.body.alt
  });
  picture.save().then(result => {
    console.log('result' + result);
  })
  .catch(err => console.log((err)));
  res.status(201).json({
    message: 'Posted!',
    createdPicture: picture
  });
});

pictureRouter.get('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  Picture.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});

export default pictureRouter;
