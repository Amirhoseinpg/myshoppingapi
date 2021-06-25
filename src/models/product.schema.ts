import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});