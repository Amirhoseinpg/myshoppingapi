import { Document } from 'mongoose';


export interface Product extends Document {
  title: string;
  image: string;
  description: string;
  price: number;
  created: Date;
}