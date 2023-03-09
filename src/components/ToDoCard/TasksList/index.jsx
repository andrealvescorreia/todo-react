import { useTasksContext } from "../../../providers/TasksProvider"
import { ToDoCard } from "..";
export function TasksList() {
    const {tasks} = useTasksContext();
    return (
        <div>
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