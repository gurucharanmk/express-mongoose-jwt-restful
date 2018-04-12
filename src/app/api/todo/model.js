import mongoose, { Schema } from 'mongoose';

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
    return next(Error('Invalid Id is passed'));
  }
  return next();
});

todoSchema.post('findOneAndUpdate', (res, next) => {
  if (res == null) {
    return next(Error('Invalid Id is passed'));
  }
  return next();
});

todoSchema.post('findOneAndRemove', (res, next) => {
  if (res == null) {
    return next(Error('Invalid Id is passed'));
  }
  return next();
});

export default mongoose.model('todo', todoSchema);
