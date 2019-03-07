import mongoose, { Schema } from 'mongoose';
import { BAD_REQUEST } from 'http-status';

const todoSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'Please provide valid title'
    },
    description: {
      type: String,
      trim: true,
      required: 'Please provide valid description'
    },
    status: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
      default: 'Not Started'
    }
  },
  {
    timestamps: true
  }
);

todoSchema.post('findOne', (res, next) => {
  if (res == null) {
    let err = Error('Invalid resource id');
    err.statusCode = BAD_REQUEST;
    err.errorInformation = { error: 'Invaid resource id' };
    return next(err);
  }
  return next();
});

todoSchema.post('findOneAndUpdate', (res, next) => {
  if (res == null) {
    let err = Error('Invalid resource id');
    err.statusCode = BAD_REQUEST;
    err.errorInformation = { error: 'Invaid resource id' };
    return next(err);
  }
  return next();
});

todoSchema.post('findOneAndRemove', (res, next) => {
  if (res == null) {
    let err = Error('Invalid resource id');
    err.statusCode = BAD_REQUEST;
    err.errorInformation = { error: 'Invaid resource id' };
    return next(err);
  }
  return next();
});

export default mongoose.model('todo', todoSchema);
