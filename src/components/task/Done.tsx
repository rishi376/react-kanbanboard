import { useDroppable } from "@dnd-kit/core";
import { MainCard } from "../shared/card/MainCard";

function Done(props: any) {
    console.log("DONE")
    const { setNodeRef } = useDroppable({ id: 'done'})
    return <MainCard ref={setNodeRef} cardName="Done" color="text-bg-success" tasks={props.tasks}  addTask={props.addTask} deleteTask={props.deleteTask}></MainCard>
}

export default Done;