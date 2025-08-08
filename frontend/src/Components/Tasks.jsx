import {useEffect} from "react";
import Task from "./Task.jsx";

const Tasks = (props) => {
    const { getAllTasks, tasks } = props;
    useEffect(() => {
        getAllTasks();
    }, [])
    return (
        <div className="h-auto bg-secondary w-auto rounded-tr-xl rounded-br-xl">
            {tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} />
                )
            })}
        </div>
    )
}
export default Tasks;