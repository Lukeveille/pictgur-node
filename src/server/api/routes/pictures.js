import express from 'express';
import mongoose from 'mongoose';
import Picture from '../models/picture';

const pictureRouter = express.Router();

pictureRouter.get('/', (req, res) => {
  Picture.find()
  .exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
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

pictureRouter.patch('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value
  }
  Picture.update({ _id: id }, { $set: updateOps })
  .exec()
  .then(result => {
    console.log(result);
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

pictureRouter.delete('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  Picture.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

export default pictureRouter;
