import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user';
import bcrypt from 'bcrypt';

const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
  User.find({ email: req.body.email })
  .exec()
  .then(user => {
    if (user.length >= 1) {
      return res.status(409).json({
        message: 'email exists'
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash
          });
          user.save()
          .then(result => {
            res.status(201).json({
              message: 'User created'
            });
          })
          .catch(err => {
            res.status(500).json({ error: err });
          });
        };
      });
    };
  });
});

userRouter.delete('/:userId', (req, res) => {
  User.remove({_id: req.params.userId})
  .exec()
  .then(result => {
    res.status(200).json({
      message: 'User deleted'
    });
  })
  .catch(err => {
    res.status(500).json({ error: err });
  });
});

export default userRouter;