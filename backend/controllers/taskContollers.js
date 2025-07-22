
export const getAllTasks = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'All tasks'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error'
        });
    }
}

export const searchTask = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Task'
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
        res.status(200).json({
            success: true,
            message: 'Task created'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in creating task'
        });
    }
}

export const updateTask = async (req, res) => {
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
    try {
        res.status(200).json({
            success: true,
            message: 'Task deleted'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in deleting task'
        })
    }
}