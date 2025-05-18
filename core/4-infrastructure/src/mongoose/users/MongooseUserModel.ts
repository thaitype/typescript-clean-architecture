import type { User } from '@acme/domain';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema<Partial<User>>(
  {
    id: String,
    email: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

export const MongooseUserModel = mongoose.model<Partial<User>>('User', UserSchema);
