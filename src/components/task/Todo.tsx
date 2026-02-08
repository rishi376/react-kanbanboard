import { useDroppable } from "@dnd-kit/core";
import { MainCard } from "../shared/card/MainCard";

function Todo(props: any) {
    const { setNodeRef } = useDroppable({ id: 'todo'})

    return (
        <MainCard ref={setNodeRef} cardName="Todo" color="text-bg-primary" tasks={props.tasks} addTask={props.addTask} deleteTask={props.deleteTask}></MainCard>
    )
};

export default Todo;