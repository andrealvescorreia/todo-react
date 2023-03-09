import React from 'react';

const TasksContext = React.createContext();

const exampleTasks = [
    {
        name: "Tarefa 4",
        description: "Uma descricao muito grande de uma tarefa que precisa ser feita o quanto antes! Mais texto é necessário para que essa caixa tenha mais de uma linha de texto.",
        completed: true,
        timeOfInclusion: '1'
    }
]

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = React.useState(exampleTasks)
    return (
        <TasksContext.Provider value={{tasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export const useTasksContext = () => React.useContext(TasksContext)

export default TasksProvider;