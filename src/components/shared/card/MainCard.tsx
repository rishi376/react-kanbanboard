import { Task } from "../../../model/Task";
import { Card } from "./Card";

export function MainCard(props: any) {

    //const cards = ['a', 'b', 'b', 'b'];
    console.log("CHECKING", props?.tasks)

    const tasks = props?.tasks?.length && props?.tasks?.map((task: Task) => <Card task={task} key={task.id} deleteTask={props.deleteTask}></Card>) || <div>Task not found</div>

    const addNewCard = async (_event: any): Promise<void> => {
        let status = props.cardName.toLowerCase().replace(/\s/g, '');
        props.addTask(new Task("Task added", status));
    }

    return (
        <div className="card p-0" ref={props.ref}>
            <div className={`card-header p-2 ${props.color}`} >
                <div className="row gx-5">
                    <div className="col-md-6 m-auto">
                        {props.cardName}
                    </div>
                    <div className="col-md-6 text-end">
                        <button className="btn btn-light" onClick={addNewCard}>+</button>
                    </div>
                </div>
            </div>
            <button className="btn btn-light w-50 m-3 card text-start" onClick={addNewCard}>+ Add card</button>

            {/* {
                props.tasks.map(() => (
                    <Card></Card>
                ))
            } */}

            {tasks}
        </div>
    )
}