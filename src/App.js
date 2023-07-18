import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Task from './components/Task';
import * as renderService from '~/apiServices/renderService';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);

    const inputValue = useRef();

    const fetchAPI = async () => {
        const tasks = await renderService.render();
        setTasks(tasks);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const handleAddTask = async () => {
        if (!inputValue.current.inputValue) {
            alert('Task content must not be empty');
        } else {
            await renderService.postData({
                task: inputValue.current.inputValue,
            });
            await fetchAPI();
        }
    };

    const handleDelete = async (id) => {
        await renderService.deleteData(id);
        await fetchAPI();
    };

    const handleUpdate = async (id) => {
        const newContent = prompt('Mời nhập nội dung bạn muốn thay đổi');
        await renderService.deleteData(id);
        await renderService.postData({
            id,
            task: newContent,
        });
        await fetchAPI();
    };

    return (
        <div className="App">
            <Header></Header>
            <Search ref={inputValue} handleAdd={handleAddTask}></Search>
            {tasks &&
                tasks
                    .sort((a, b) => a.id - b.id)
                    .map((task) => (
                        <Task
                            key={task.id}
                            content={task.task}
                            handleDelete={() => handleDelete(task.id)}
                            handleUpdate={() => handleUpdate(task.id)}
                        ></Task>
                    ))}
        </div>
    );
}

export default App;
