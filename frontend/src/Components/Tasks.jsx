import {useEffect} from "react";
import Task from "./Task.jsx";

const Tasks = (props) => {
    const { getAllTasks, tasks } = props;
    useEffect(() => {
        getAllTasks();
    }, [])
    return (
        <div className="h-auto p-6 bg-secondary w-3/5 ">
            {tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} />
                )
            })}
        </div>
    )
}
export default Tasks;