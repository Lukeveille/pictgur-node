import mongoose from 'mongoose';

const pictureSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  src: { type: String, required: true },
  alt: { type: String, required: true }
});

const Picture = mongoose.model('Picture', pictureSchema);

export default Picture;
