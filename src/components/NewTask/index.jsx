import { useTasksContext } from "../../providers/TasksProvider"
import React, { useState } from 'react'

export function NewTask(){
    const {setTasks} = useTasksContext();

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

    return (
        
        <div className="new-task">
            <input
                type="text"
                placeholder="Add a task"
                onChange={e => setTaskName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}