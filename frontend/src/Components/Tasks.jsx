import {useEffect} from "react";
import Task from "./Task.jsx";
import { Plus, Search, Trash } from 'lucide-react';

const Tasks = (props) => {
    const { getAllTasks, tasks,
      handleChange, search,
      setExpandView, tasksView,
      setTasksView, searchIconPosition,
      setSearchIconPosition} = props;
    useEffect(() => {
        getAllTasks();
    }, [])
    return (
        <div className={`flex flex-col gap-6 h-auto py-6 pl-6 pr-10 bg-secondary ${tasksView}`}>
            <section className="flex gap-3 w-full justify-between">
              <div className={`h-8 w-4/5 bg-sec-background-color rounded relative`}>
                <input onChange={handleChange} value={search} className={`bg-primary text-primary outline-0 h-8 w-2/5 p-4 rounded`} placeholder="Search by title"/>
                <button className={`absolute ${searchIconPosition} top-0.5`}>
                  <Search className="stroke-accent w-4 h-4 box-content pt-2"/>
                </button>
              </div>
              <div className="flex gap-3">
                <button className="flex w-max hover:bg-accent bg-secondary transition-bg px-4 py-2 rounded border border-accent text-primary"
                onClick={() => {
                  setExpandView("flex flex-col gap-6 rounded-tl-2xl bg-primary p-6 w-2/5 h-screen")
                  setTasksView("w-3/5");
                  setSearchIconPosition("left-[190px]");
                }}>
                  <Plus className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                  Add new task
                </button>
                <button className="flex w-max hover:bg-accent bg-secondary transition-bg px-4 py-2 rounded border border-accent text-primary">
                  <Trash className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                  Delete task
                </button>
              </div>
            </section>
            {tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} />
                )
            })}
        </div>
    )
}
export default Tasks;