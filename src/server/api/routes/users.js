import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    password: req.body.email
  });
});

export default userRouter;