import { useTasksContext } from "../../providers/TasksProvider"
import { TaskCard } from "../TaskCard";
import './styles.css'
export function TasksList() {
    const {tasks} = useTasksContext();
    return (
        <div className="tasks-list">
            {
                tasks.map(task =>
                    <TaskCard
                        key={task.timeOfInclusion}
                        task={task}
                    />
                )
            }
            
        </div>
    )
}