import './styles.css'
import './modal-style.css'
import React, { useState, useEffect } from 'react'
import { useTasksContext } from "../../providers/TasksProvider"
import Modal from 'react-modal'
import { PenSvg } from '../../assets/PenSvg'
import { CheckSvg } from '../../assets/CheckSvg'
Modal.setAppElement("#root")

export function ToDoCard({ task }) {
    const [thisTask, setThisTask] = useState(task)
    const [thisTaskEdited, setThisTaskEdited] = useState(thisTask)

    const {tasks, setTasks} = useTasksContext();

    useEffect(() => {
        updateThisTask()
    }, [thisTask])

    const [modalIsOpen, setIsOpen] = useState(false)
    function openModal() { setIsOpen(true) }
    function closeModal() { setIsOpen(false) }
    
    function saveEdit(){
        setThisTask(thisTaskEdited)
        closeModal()
    }
    function cancelEdit(){
        setThisTaskEdited(thisTask)
        closeModal()
    }
    

    

    function handleCheckBoxClick() {
        setThisTask({
            ...thisTask, 
            completed: !thisTask.completed
        }) 
    }

    function updateThisTask(){
        let thisTaskIndex = tasks.findIndex(taskItem => taskItem.timeOfInclusion === thisTask.timeOfInclusion)
        const updatedTasks = [...tasks]
        updatedTasks[thisTaskIndex] = thisTask
        setTasks(updatedTasks)
    }

    function deleteThisTask(){
        function isNotThisTask(taskItem){
            return(taskItem.timeOfInclusion !== thisTask.timeOfInclusion)
        }
        const updatedTasks = [...tasks].filter(isNotThisTask);
        setTasks(updatedTasks)
    }

    return (
        <div className={"card" + (thisTask.completed ? " completed" : "")} >
            <div className="card-header">
                <button className="task-checkbox" type="button" onClick={handleCheckBoxClick}>
                    <CheckSvg/>
                </button>

                <h2 className="task-name">{thisTask.name}</h2>

                <button className="task-edit" type="button" onClick={openModal}>
                    <PenSvg/>
                </button>
            </div>

            <div className="card-body">
                <p className="task-description">{thisTask.description}</p>
            </div>

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal louco"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <input
                    value={thisTaskEdited.name}
                    type="text"
                    onChange = {e => setThisTaskEdited({
                            ...thisTaskEdited,
                            name: e.target.value
                        })
                    }
                />

                <input
                    value={thisTaskEdited.description}
                    type="text"
                    onChange = {e => setThisTaskEdited({
                        ...thisTaskEdited,
                        description: e.target.value
                    })
                }
                />
                <button onClick={deleteThisTask}>Deletar</button>
                <button onClick={cancelEdit}>Cancelar</button>
                <button onClick={saveEdit}>Salvar</button>
            </Modal>

        </div>
    )
}