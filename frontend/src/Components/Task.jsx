
const Task = (props) => {
    const {taskName} = props;
    return (
        <div className="w-auto h-auto p-2 bg-secondary rounded text-white">
            <span>taskName</span>
        </div>
    )
}

export default Task;