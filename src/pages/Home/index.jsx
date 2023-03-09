import React, { useState, useEffect } from 'react'
import { ToDoCard } from "../../components/ToDoCard"
import './styles.css'

import TasksProvider from '../../providers/TasksProvider';
import { TasksList } from '../../components/ToDoCard/TasksList';

export function Home() {
    
    /*
    const [taskName, setTaskName] = useState('')


    function handleNewTask() {
        let newTask = {
            name: taskName,
            description: '',
            completed: false,
            timeOfInclusion: new Date()
                .toLocaleDateString("pt-br", {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                }),
        }
        setTasks(previousState => [...previousState, newTask])
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setTaskName(e.target.value);
            handleNewTask()
            e.target.value = ''
        }
    };
    */

    return (
        <div className="home">
            <TasksProvider>
                <TasksList/>
            </TasksProvider>
        </div>
    )
}
