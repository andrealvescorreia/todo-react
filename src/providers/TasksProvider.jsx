import React from 'react';

const TasksContext = React.createContext();

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = React.useState([])
    return (
        <TasksContext.Provider value={{tasks, setTasks}} >
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksContext = () => React.useContext(TasksContext)

export default TasksProvider;