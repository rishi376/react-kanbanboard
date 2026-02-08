import { useDroppable } from "@dnd-kit/core";
import { MainCard } from "../shared/card/MainCard";

function InProgress(props: any) {
    const { setNodeRef } = useDroppable({id: 'inProgress'})
    return <MainCard ref={setNodeRef} cardName="In Progress" color="text-bg-warning" tasks={props.tasks}  addTask={props.addTask} deleteTask={props.deleteTask}></MainCard>
};

export default InProgress;