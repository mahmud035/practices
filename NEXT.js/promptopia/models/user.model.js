import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exists!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  image: {
    type: String,
  },
});

// NOTE: First check if the Model is already exists. If not then create it. We have to do this way, if we are using NEXT.js

export const User = models.User || model('User', UserSchema);
