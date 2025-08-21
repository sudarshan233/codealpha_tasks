import React, {useState} from 'react';
import Tasks from './Components/Tasks.jsx';
import ViewTaskBar from './Components/ViewTaskBar.jsx';
import TitleBar from './Components/TitleBar.jsx';
import {api} from "../lib/axios.js";
import {Search} from "lucide-react";

const App = () => {
    const [tasks, setTasks] = useState([])
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const [expandView, setExpandView] = useState("hidden");
    const [tasksView, setTasksView] = useState("w-full");
    const [searchIconPosition, setSearchIconPosition] = useState("left-[570px]");

    const getAllTasks = async () => {
        try {
            const response = await api.get('/');
            console.log(response.data);
            setTasks(response.data.tasks);
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    }

    const addTask = async (task) => {
      const {taskName, steps, description} = task;
      try {
        await api.post('/create', {
          taskName,
          steps,
          description,
        });
      } catch (error) {
        console.log(error);
      }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        console.log("Searching: ", value);
        if (search.length > 0) {
            const filteredTasks = allTasks.filter((task) => {
                return task.taskName.toLowerCase().startsWith(value.toLowerCase());
            });
            setTasks(filteredTasks);
        } else {
            setTasks(allTasks);
        }
    }

    return (
        <div className="bg-secondary h-screen">
            <TitleBar />
            <div className="flex">
                <Tasks getAllTasks={getAllTasks} tasks={tasks} handleChange={handleChange} search={search}
                setExpandView={setExpandView} tasksView={tasksView} setTasksView={setTasksView} searchIconPosition={searchIconPosition} setSearchIconPosition={setSearchIconPosition} />
                <ViewTaskBar expandView={expandView} setExpandView={setExpandView} addTask={addTask} />
            </div>
        </div>
    )
}

export default App;