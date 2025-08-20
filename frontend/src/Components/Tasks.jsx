import React, {useEffect} from "react";
import Task from "./Task.jsx";
import {Search} from "lucide-react";

const Tasks = (props) => {
    const { getAllTasks, tasks, handleChange, search } = props;
    useEffect(() => {
        getAllTasks();
    }, [])
    return (
        <div className="flex flex-col gap-6 h-auto p-6 bg-secondary w-3/5">
            <div className={`h-8 w-2/5 mr-12 box-border self-center bg-sec-background-color rounded-xl relative`}>
                <input onChange={handleChange} value={search} className={`bg-primary text-primary outline-0 h-8 w-full p-4 rounded-xl`} placeholder="Search by title"/>
                <Search className="stroke-accent w-4 h-4 right-3 absolute top-2"/>
            </div>
            {tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} />
                )
            })}
        </div>
    )
}
export default Tasks;