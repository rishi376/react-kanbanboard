import { useEffect, useState } from 'react'
import './App.css'
import Todo from './components/task/Todo'
import InProgress from './components/task/InProgress'
import  Done  from './components/task/Done'

import { TaskService } from './services/TaskService'
import type { Task } from './model/Task'
import { DndContext, type DragEndEvent } from '@dnd-kit/core'

function App() {
  // const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<Task[]>([]); 
  

  let todoTasks: Task[] = []
  let inProgressTasks: Task[] = [];
  let doneTasks: Task[] = [];

  console.log("called")
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await TaskService.getTasks();   
      setTasks(tasks);
    };

    getTasks();
  }, []);

  const addTask = async (task: Task) => {
    const newTask = await TaskService.addNewTask(task.taskName, task.status);
    setTasks(prev => [...prev, newTask]);
    todoTasks=inProgressTasks=doneTasks=[];
  }

  const deleteTask = async (taskId: number) => {
    console.log("BEFORE DELETE ", tasks);
    const updatedTasks = await TaskService.deleteTask(taskId, tasks);
    console.log("DELETED ", updatedTasks);
    // setTasks(prev => [...updatedTasks]);
    setTasks(updatedTasks);
    todoTasks=inProgressTasks=doneTasks=[];
  }

  console.log("STATE FINAL", tasks)
  const allTasks = tasks?.map((task) => {
    if(task.status == 'todo') {
      todoTasks.push(task);
      // return <Todo tasks={task}></Todo>
    }
    else if(task.status == 'inprogress') {
      inProgressTasks.push(task);
      // return <InProgress task={task}></InProgress>
    }
    else if(task.status == 'done') {
      doneTasks.push(task);
      // return <Done task={task}></Done>
    }
  });


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const taskId = active?.id as number;
    const newStatus = over?.id as Task['status'];

    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, status: newStatus} : task
      )
    );

    TaskService.updateStatus(taskId, newStatus);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="row gx-5">
          <div className="col-4">
            <Todo tasks={todoTasks} addTask={addTask} deleteTask={deleteTask}></Todo>
          </div>
          <div className="col-4">
            <InProgress tasks={inProgressTasks} addTask={addTask} deleteTask={deleteTask}></InProgress>
          </div>
          <div className="col-4">
            <Done tasks={doneTasks} addTask={addTask} deleteTask={deleteTask}></Done>
          </div>
        </div>
      </DndContext>
      

      {allTasks}
    </>
  )
}

export default App
