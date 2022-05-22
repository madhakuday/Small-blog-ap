import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

export const cardmodel = new mongoose.model('cardData', cardSchema);
