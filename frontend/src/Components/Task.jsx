
const Task = (props) => {
    const {task} = props;
    return (
        <div className="flex items-center gap-1 p-2 bg-primary rounded-xl">
            <div className="flex justify-center items-center rounded-full w-3.5 h-3.5 box-content p-1 m-2 bg-white opacity-50">
                <button className="rounded-full w-3.5 h-3.5 bg-primary"></button>
            </div>
            <div className="w-max h-auto p-2 text-white">
                <span className="text-base">{task.taskName}</span>
            </div>
        </div>
    )
}

export default Task;