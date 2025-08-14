import Task from "../model/task.js";

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            success: true,
            message: 'All tasks',
            tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error'
        });
    }
}

export const searchTask = async (req, res) => {
    const {taskName} = req.query;
    const task = await Task.find({
        taskName
    })
    try {
        res.status(200).json({
            success: true,
            message: 'Task found',
            task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in searching task'
        });
    }
}

export const createTask = async (req, res) => {
    try {
        const {taskName, steps, description, statusOfTask} = req.body;
        const task = new Task({
            taskName,
            steps,
            description,
            statusOfTask
        })

        await task.save();
        res.status(200).json({
            success: true,
            message: 'Task created successfully',
            task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in creating task'
        });
    }
}

export const updateTask = async (req, res) => {
    const { taskName, steps, description, statusOfTask } = req.body;

    await Task.findByIdAndUpdate(req.params.id, {
        taskName,
        steps,
        description,
        statusOfTask
    });

    try {
        res.status(200).json({
            success: true,
            message: 'Task updated'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in updating task'
        })
    }
}

export const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteTask = await Task.findByIdAndDelete(id);
        if(!deleteTask) return res.status(404).json({
            success: false,
            message: 'Task not found'
        })
        res.status(200).json({
            success: true,
            message: 'Task deleted',
            deleteTask
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in deleting task'
        })
    }
}