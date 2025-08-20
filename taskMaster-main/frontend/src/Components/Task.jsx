import {useState} from "react";

const Task = (props) => {
    const {task} = props;
    const [backgroundColor, setBackgroundColor] = useState("bg-primary");
    return (
        <div className="flex items-center gap-1 p-2 bg-primary rounded-xl">
            <button className={`rounded-full w-4 h-4 border border-primary ${backgroundColor} ml-2`} onClick={() => {
                setBackgroundColor(prevState => prevState === "bg-primary" ? "bg-accent": "bg-primary");
            }}></button>
            <div className="w-max h-auto p-2 text-white">
                <span className="text-base">{task.taskName}</span>
            </div>
        </div>
    )
}

export default Task;