import { useTasksContext } from "../../providers/TasksProvider"
import { ToDoCard } from "../ToDoCard";
import './styles.css'
export function TasksList() {
    const {tasks} = useTasksContext();
    return (
        <div className="tasks-list">
            {
                tasks.map(task =>
                    <ToDoCard
                        key={task.timeOfInclusion}
                        task={task}
                    />
                )
            }
            
        </div>
    )
}