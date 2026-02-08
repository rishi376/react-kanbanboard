import { useDraggable } from "@dnd-kit/core";

export function Card(props: any) {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: props.task.id });

    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` } : undefined;

    const deleteTask = async (event: any): Promise<void> => {
        event.preventDefault();
        event.stopPropagation();
        props.deleteTask(props.task.id);
    }


    return (
        <>
            <div className="card m-3 p-0 shadow" ref={setNodeRef} style={style} {...listeners} {...attributes} >
                <div className="card-body row" >
                    <div className="col-8">
                        <h5 className="card-title m-0">{props.task.taskName}</h5>
                        <p className="card-text">-</p>
                    </div>
                    <div className="col text-end position-relative">
                        <a href="#" className="btn btn-danger" onPointerDown={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()} onClick={deleteTask}>-</a>
                    </div>
                </div>
            </div>

        </>
    )
}