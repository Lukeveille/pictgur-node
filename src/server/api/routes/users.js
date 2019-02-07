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

userRouter.get('/:userId', (req, res) => {
  const id = req.params.userId;
  res.status(200).json({
    message: 'This is for user #' + id,
  });
});

userRouter.delete('/:userId', (req, res) => {
  const id = req.params.userId;
  res.status(200).json({
    message: 'This deletes the user :) ' + id,
  });
});

export default userRouter;