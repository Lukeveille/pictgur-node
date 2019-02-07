import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Users show here!',
  });
});

userRouter.post('/', (req, res) => {
  res.status(201).json({
    message: 'Users post here!',
  });
});

userRouter.get('/:pictureId', (req, res) => {
  const id = req.params.pictureId;
  res.status(200).json({
    message: 'This is for user #' + id,
  });
});

export default userRouter;