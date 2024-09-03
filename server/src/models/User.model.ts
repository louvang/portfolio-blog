import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUser extends Document {
  _id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// Schema
const userSchema = new Schema<IUser>(
  {
    _id: { type: String, default: uuidv4() },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
