import React, {useState} from 'react';
import Tasks from './Components/Tasks.jsx';
import ViewTaskBar from './Components/ViewTaskBar.jsx';
import TitleBar from './Components/TitleBar.jsx';
import {api} from "../lib/axios.js";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

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


    return (
        <div className="bg-secondary h-screen">
            <TitleBar />
            <div className="flex">
                <Tasks getAllTasks={getAllTasks} tasks={tasks}/>
                <ViewTaskBar />
            </div>
        </div>
    )
}

export default App;