import React, { useState, useEffect } from 'react'
import { ToDoCard } from "../../components/ToDoCard"
import './styles.css'
export function Home() {
    const [tasks, setTasks] = useState([])
    const [taskName, setTaskName] = useState('')
    const [taskChanged, setTaskChanged] = useState()
    useEffect(() => {
        alert('tasks mudou')
    }, [tasks])

    useEffect(() => {
        alert('uma task mudou')
    }, [taskChanged])

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
        <div className="home">
            <input
                type="text"
                placeholder="Add a task"
                onChange={e => setTaskName(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <ToDoCard
                task={{ name: "Tarefa 3 com um nome muito grande se ta maluco mermao nome grande do caraio azideia", }}
                taskChanger={setTaskChanged}

            />
            <ToDoCard
                task={
                    {
                        name: "Tarefa 4",
                        description: "Uma descricao muito grande de uma tarefa que precisa ser feita o quanto antes! Mais texto é necessário para que essa caixa tenha mais de uma linha de texto.",
                        completed: true
                    }
                }
                taskChanger={setTaskChanged}
            />

            {
                tasks.map(task =>

                    <ToDoCard
                        key={task.timeOfInclusion}
                        task={task}
                        taskChanger={setTaskChanged}
                    />
                )
            }

        </div>
    )
}
