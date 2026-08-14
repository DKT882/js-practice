import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
    coreatedBy: {
      type: mongoose.Schema.Tyep.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model('subTodo', subTodoSchema);
