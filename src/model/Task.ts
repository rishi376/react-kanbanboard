import { tasksMock } from "../mocks/tasks.mock";

export class Task {
    id: number;
    taskName: string;
    status: "todo" | "inprogress" | "done";

    constructor(taskName: string, status: "todo" | "inprogress" | "done") {
        this.id = tasksMock.length + 1;
        this.taskName = taskName;
        this.status = status;
    }
}