import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true,
    },
    steps: {
        type: Array,
        default: [],
    },
    description: {
        type: String,
        default: "",
    },
    statusOfTask: {
        type: Boolean,
        default: false,
        required: true,
    }
}, {timestamps: true});

const Task = mongoose.model('Task', taskSchema);
export default Task;