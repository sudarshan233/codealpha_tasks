import React, {useEffect, useState} from 'react';
import Tasks from './Components/Tasks.jsx';
import ViewTaskBar from './Components/ViewTaskBar.jsx';
import TitleBar from './Components/TitleBar.jsx';
import {api} from "../lib/axios.js";

const App = () => {
    const [tasks, setTasks] = useState([])
    const [allTasks, setAllTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const [taskName, setTaskName] = useState("");
    const [steps, setSteps] = useState([]);
    const [step, setStep] = useState("");
    const [description, setDescription] = useState("");

    const [clickToView, setClickToView] = useState(false);
    const [clickedTask, setClickedTask] = useState("");

    const [expandView, setExpandView] = useState("hidden");
    const [tasksView, setTasksView] = useState("w-full");
    const [searchIconPosition, setSearchIconPosition] = useState("left-[430px]");
    const [completedTask, setCompletedTask] = useState('');

    const addTask = async (event) => {
        event.preventDefault();
        console.log(taskName, steps, description);

        try {
            await api.post('/create', {
                taskName,
                steps,
                description,
                statusOfTask: false,
            });
        } catch (error) {
            console.log(error);
        }
        finally {
            setExpandView("hidden");
            setTasksView("w-full");
            setSearchIconPosition("left-[430px]");
            setTaskName("");
            setSteps([]);
            setStep("");
            setDescription("");
        }
    }

    const viewTask = (taskId) => {
        setClickToView(true);
        setClickedTask(taskId);
        setExpandView("flex flex-col gap-6 rounded-tl-2xl p-6 w-2/5 h-screen")
        setTasksView("w-3/5");
        setSearchIconPosition("left-[190px]");
        const oldTask = tasks.find((task) => task._id === taskId);
        setTaskName(oldTask.taskName);
        setDescription(oldTask.description);
        setSteps(oldTask.steps);
    }

    const editTask = async (event) => {
        event.preventDefault();
        console.log(taskName, steps, description);

        try {
            await api.put(`/${clickedTask}`, {
                taskName,
                steps,
                description,
                "statusOfTask": false
            });
            setClickToView(false);
        } catch (error) {
            console.log(error);
        }
        finally {
            setExpandView("hidden");
            setTasksView("w-full");
            setSearchIconPosition("left-[430px]");
            setTaskName("");
            setSteps([]);
            setStep("");
            setDescription("");
        }
    }

    const deleteTask = async (taskId) => {
        try {
            await api.delete(`/${taskId}`);
            setTasks(tasks.filter(task => task.id !== taskId));
        } catch (error) {
            console.log(error);
        }
    }

    const toggleTask = async (task, isCompleted) => {
        try {
            if(isCompleted) {
                await api.put(`/${task._id}`, {
                    ...task,
                    statusOfTask: true
                })
            } else {
                await api.put(`/${task._id}`, {
                    ...task,
                    statusOfTask: false
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        console.log("Searching: ", value);
        if (value.length > 0) {
            const filteredTasks = allTasks.filter((task) => {
                return task.taskName.toLowerCase().startsWith(value.toLowerCase())
            });
            setTasks(filteredTasks);
        } else {
            setTasks(allTasks);
        }
    }

    return (
        <div className="bg-secondary bg-heroPattern h-screen">
            <TitleBar />
            <div className="flex">
                <Tasks
                    setAllTasks={setAllTasks} setLoading={setLoading} setTasks={setTasks} tasks={tasks} handleChange={handleChange} search={search} viewTask={viewTask}
                    setExpandView={setExpandView} tasksView={tasksView} setTasksView={setTasksView}
                    searchIconPosition={searchIconPosition} deleteTask={deleteTask} completedTask={completedTask}
                    setCompletedTask={setCompletedTask} toggleTask={toggleTask}/>
                <ViewTaskBar
                    expandView={expandView} setExpandView={setExpandView}
                    addTask={addTask} editTask={editTask} setTasksView={setTasksView}
                    taskName={taskName} setTaskName={setTaskName}
                    steps={steps} setSteps={setSteps}
                    step={step} setStep={setStep}
                    description={description} setDescription={setDescription}
                    setSearchIconPosition={setSearchIconPosition}
                    setClickToView={setClickToView} clickToView={clickToView}
                />
            </div>
        </div>
    )
}

export default App;