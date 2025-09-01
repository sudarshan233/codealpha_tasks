import {useEffect, useState} from "react";
import Task from "./Task.jsx";
import { Plus, Search} from 'lucide-react';
import HandleEmptyTasks from "./HandleEmptyTasks.jsx";
import {api} from "../../lib/axios.js";

const Tasks = (props) => {
    const { tasks, setTasks, setLoading, refresh,
      setAllTasks, handleChange, search,
      setExpandView, tasksView,
      setTasksView, viewTask, deleteTask,
      toggleTask} = props;
    const [searchBarPosition, setSearchBarPosition] = useState(2/5);

    useEffect(() => {
        const getAllTasks = async () => {
            try {
                const response = await api.get('/');
                console.log(response.data);
                setTasks(response.data.tasks);
                setAllTasks(response.data.tasks);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        }
        getAllTasks();
    }, [refresh])

    return (
        <div className={`flex flex-col gap-6 h-auto py-6 pl-6 pr-10 ${tasksView}`}>
            <section className="flex gap-3 w-full justify-between">
              <div className={`flex h-8 ${searchBarPosition} bg-primary rounded justify-between`}>
                <input onChange={handleChange} value={search} className={`bg-primary text-primary outline-0 h-8 p-4 rounded`} placeholder="Search by title"/>
                  <Search className="stroke-accent w-4 h-4 mt-2 mr-2 box-content"/>
              </div>
              <div className="flex gap-3">
                <button className="flex w-max hover:bg-accent bg-secondary transition-bg duration-[0.4s] px-4 py-2 rounded border border-accent text-primary"
                onClick={() => {
                  setExpandView("flex flex-col gap-6 rounded-tl-2xl p-6 w-2/5")
                  setTasksView("w-3/5");
                  setSearchBarPosition(1/5);

                }}>
                  <Plus className="stroke-primary w-4 h-4 box-content pt-1 pr-2" />
                  Add new task
                </button>
              </div>
            </section>
            {tasks.length === 0 ? <HandleEmptyTasks />: tasks.map((task, index) => {
                return (
                    <Task key={index} task={task} viewTask={viewTask} deleteTask={deleteTask} toggleTask={toggleTask}/>
                )
            })}
        </div>
    )
}
export default Tasks;