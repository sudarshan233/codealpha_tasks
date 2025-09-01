import React, {useEffect, useState} from 'react';
import toast from "react-hot-toast";
import {api} from "../lib/axios.js";

import Tasks from './Components/Tasks.jsx';
import ViewTaskBar from './Components/ViewTaskBar.jsx';
import TitleBar from './Components/TitleBar.jsx';

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
    const [refresh, setRefresh] = useState(false);

    const [expandView, setExpandView] = useState("hidden");
    const [tasksView, setTasksView] = useState("w-full");

    const addTask = async (event) => {
        event.preventDefault();
        console.log(taskName, steps, description);
        if(!taskName || !steps || !description ) {
            toast.error('All fields are required', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
            return;
        }
        try {
            await api.post('/create', {
                taskName,
                steps,
                description,
                statusOfTask: false,
            });
            toast.success('Task added successfully.', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
            setRefresh(!refresh);
        } catch (error) {
            console.log(error);
            toast.error('Error while adding task', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
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
            toast.success('Task edited successfully.', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
        } catch (error) {
            console.log(error);
            toast.error('Error while editing task', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
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
            setRefresh(!refresh);
            toast.success('Task deleted successfully.', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
        } catch (error) {
            console.log(error);
            toast.error('Error while deleting task', {
                style: {
                    background: "#252525",
                    color: "#F2F2F2",
                }
            });
        }
    }

    const toggleTask = async (task, isCompleted) => {
        try {
            if(isCompleted) {
                await api.put(`/${task._id}`, {
                    ...task,
                    statusOfTask: true
                })
                toast.success('Task Mastered. Congratulations!!', {
                    icon: '🎉🎉',
                    style: {
                        background: "#252525",
                        color: "#F2F2F2",
                    }
                });
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
                    setAllTasks={setAllTasks} refresh={refresh} setLoading={setLoading} setTasks={setTasks} tasks={tasks} handleChange={handleChange} search={search} viewTask={viewTask}
                    setExpandView={setExpandView} tasksView={tasksView} setTasksView={setTasksView}
                    deleteTask={deleteTask} toggleTask={toggleTask}/>
                <ViewTaskBar
                    expandView={expandView} setExpandView={setExpandView}
                    addTask={addTask} editTask={editTask} setTasksView={setTasksView}
                    taskName={taskName} setTaskName={setTaskName}
                    steps={steps} setSteps={setSteps}
                    step={step} setStep={setStep}
                    description={description} setDescription={setDescription}
                    clickToView={clickToView}
                />
            </div>
        </div>
    )
}

export default App;