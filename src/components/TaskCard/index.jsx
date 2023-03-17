import './styles.css'
import './modal-style.css'
import React, { useState, useEffect } from 'react'
import { useTasksContext } from "../../providers/TasksProvider"

import { PenSvg }      from '../../assets/PenSvg'
import { CheckSvg }    from '../../assets/CheckSvg'
import { TrashCanSvg } from '../../assets/TrashCanSvg'
import { XMarkSvg }    from '../../assets/XMarkSvg'

import TextareaAutosize from 'react-textarea-autosize';
import Modal from 'react-modal'
Modal.setAppElement("#root")

export function TaskCard({ task }) {
    const [thisTask, setThisTask] = useState(task)
    const [thisTaskEdited, setThisTaskEdited] = useState(thisTask)

    const {tasks, setTasks} = useTasksContext();

    useEffect(() => {
        updateThisTask()
        setThisTaskEdited(thisTask)
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

                <h2 className="task-name"  onClick={openModal}>{thisTask.name} </h2>

                <button className="task-edit" type="button" onClick={openModal}>
                    <PenSvg/>
                </button>
            </div>
            
            <div className="card-body" onClick={openModal}>
                <p className="task-description" onClick={openModal} >{thisTask.description}</p>
            </div>

            <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Editar Tarefa"
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <div className={'modal-header'+ (thisTaskEdited.completed ? " completed" : "")}>

                    <button className="task-checkbox" onClick={()=>{
                        setThisTaskEdited({
                            ...thisTaskEdited,
                            completed: !thisTaskEdited.completed
                        })
                    }}>
                        <CheckSvg/>
                    </button>

                    <input
                        className="edit-name"
                        value={thisTaskEdited.name}
                        onChange = {e => setThisTaskEdited({
                                ...thisTaskEdited,
                                name: e.target.value
                            })
                        }
                    />
                </div>
           
                <TextareaAutosize 
                    className="edit-description"
                    minRows={8}
                    maxRows={14}  
                    name="Task description" 
                    value={thisTaskEdited.description}
                    onChange = {e => setThisTaskEdited({
                            ...thisTaskEdited,
                            description: e.target.value
                        })
                    }
                    placeholder="Descrição..."
                />
                <hr />
                <div className="modal-footer">
                    <button className="delete" onClick={deleteThisTask}>
                        <TrashCanSvg/>
                        <span className="action-name">Deletar</span>
                    </button>
                    <button className="cancel" onClick={cancelEdit}>
                        <XMarkSvg/>
                        <span className="action-name">Cancelar</span>
                    </button>
                    
                    <button className="save" onClick={saveEdit}>
                        <CheckSvg/>
                        <span className="action-name">Salvar</span>
                    </button>
                </div>
            </Modal>
        </div>
    )
}