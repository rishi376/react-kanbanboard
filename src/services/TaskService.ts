import { tasksMock } from "../mocks/tasks.mock"
import { Task } from "../model/Task";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TaskService = {
    getTasks: async () => {
        await delay(500);
        return tasksMock;
    },

    addNewTask: async (taskName: string, status: "todo" | "inprogress" | "done") => {
        await delay(200);
        const newTask = new Task(taskName, status);
        tasksMock.push(newTask);
        return newTask;
    },

    deleteTask: async (taskId: number, tasks: Task[]) => {
        await delay(300);
        // let index = tasksMock.indexOf(task);

        // if(index !== -1) {
        //     tasksMock.splice(index, 1);
        // }
        
        let updatedTasks = tasks.filter((val) => val.id != taskId);
        return updatedTasks;

    },

    findTaskById: async (taskId: number) => {
        await delay(300);
        const task = tasksMock.filter(task => task.id == taskId);

        if(task.length != 0) {
            return task[0];
        }
        return null;
    },

    updateStatus: async (taskId: number, newStatus: Task['status']) => {
        await delay(300);

        let task = await TaskService.findTaskById(taskId);

        console.log("STATUS ", newStatus);

        if(task != null) {
            let index = tasksMock.indexOf(task);

            console.log("TASK FOUND ", index);

            tasksMock[index].status = newStatus;
        }
        console.log("DRAGGED ", tasksMock);
    }
}