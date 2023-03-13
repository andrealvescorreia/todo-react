import React from 'react'
import './styles.css'

import TasksProvider from '../../providers/TasksProvider';
import { TasksList } from '../../components/TasksList';
import { NewTask } from '../../components/NewTask';
export function Home() {
    return (
        <div className="home">
            <TasksProvider>
                <NewTask/>
                <TasksList/>
            </TasksProvider>
        </div>
    )
}
