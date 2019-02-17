import express from 'express';
import mongoose from 'mongoose';
import Picture from '../models/picture';

const pictureRouter = express.Router();

pictureRouter.get('/', (req, res) => {
  Picture.find()
  .select('src alt _id')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      pictures: docs.map(doc => ({
        src: doc.src,
        alt: doc.alt,
        _id: doc._id,
        request: {
          type: 'GET',
          url: 'http://localhost:9095/api/pictures/' + doc._id
        }
      }))
    };
    res.status(200).json(response);
  })
  .catch(err => {
    res.status(500).json({error: err})
  })
});

pictureRouter.post('/', (req, res) => {
  const picture = new Picture({
    _id: new mongoose.Types.ObjectId(),
    src: req.body.src,
    alt: req.body.alt
  });
  picture.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Posted!',
      createdPicture: {
        src: result.src,
        alt: result.alt,
        _id: result._id,
        request: {
          type: 'GET',
          url: 'http://localhost:9095/api/pictures/' + result._id
        }
      }
    });
  })
  .catch(err => {
    res.status(500).json({error: err});
  });
});

pictureRouter.get('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  Picture.findById(id)
  .select('name price _id')
  .exec()
  .then(doc => {
    res.status(200).json({
      picture: doc,
      request: {
        type: 'GET',
        description: 'Get all pictures',
        url: 'http://localhost:9095/api/pictures'
      }
    });
  })
  .catch(err => {
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
    res.status(200).json({
      message: 'Picture updated',
      request: {
        type: 'GET',
        url: 'http://localhost:9095/api/pictures/' + result._id
      }
    });
  })
  .catch(err => {
    res.status(500).json({error: err});
  });
});

pictureRouter.delete('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  Picture.remove({_id: id})
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'Picture deleted',
      request: {
        type: 'POST',
        url: 'http://localhost:9095/api/pictures/',
        body: { src: 'String', alt: 'String' }
      }
    });
  })
  .catch(err => {
    res.status(500).json({error: err});
  });
});

export default pictureRouter;
