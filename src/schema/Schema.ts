import mongoose from "mongoose";

const TaskManagementSchema = new mongoose.Schema({
  admin: {
    type: Boolean,
    default: true,
  },
  userID: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default:'assigned'
  },
  task: {
    type: String,
    required: true,
    minlength: 5,
  },
  deadline: {
    type: String,
    required: true,
  },
});

export default mongoose.model("TaskManagement", TaskManagementSchema);