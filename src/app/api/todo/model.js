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

export default mongoose.model('todo', todoSchema);
