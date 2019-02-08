import mongoose from 'mongoose';

const pictureSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  src: String,
  alt: String
});

const Picture = mongoose.model('Picture', pictureSchema);

export default Picture;
