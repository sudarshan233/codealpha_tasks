import {useState} from "react";
import {Trash} from "lucide-react";

const Task = (props) => {
    const {task, viewTask, deleteTask, toggleTask} = props;
    const [backgroundColor, setBackgroundColor] = useState("bg-primary");
    const [isCompleted, setIsCompleted] = useState(true);
    const [style, setStyle] = useState('');
    return (
        <div className="hover:border border-accent transition-border box-border flex justify-between items-center gap-1 p-2 bg-primary rounded-xl">
            <div className={'flex items-center gap-1'}>
                <button className={`rounded-full w-4 h-4 border border-primary ${backgroundColor} ml-2`} onClick={() => {
                    setBackgroundColor(prevState => prevState === "bg-primary" ? "bg-accent": "bg-primary");
                    setIsCompleted((prevState) => !prevState);
                    setStyle(prevState => prevState === 'line-through' ? '' : 'line-through');
                    toggleTask(task, isCompleted);
                }}></button>
                <div onClick={() => viewTask(task._id)} className="w-max h-auto p-2 text-white">
                    <span className={`text-base ${style}`}>{task.taskName}</span>
                </div>
            </div>
            <button onClick={() => {
                deleteTask(task._id);
            }}><Trash className={'w-5 h-5 mr-2 hover:opacity-100 opacity-60 transition-opacity duration-[0.4s] stroke-red-800'}/></button>
        </div>
    )
}

export default Task;