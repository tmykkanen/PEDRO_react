/* eslint-disable react/jsx-key */
import { ChangeEvent, useState } from 'react'
import Task from './Task.tsx';

export type Task = {
  taskId: number,
  taskName: string;
  completed: boolean
}

const App = () => {
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    if (newTask === '') return
    const task: Task = {
      taskId: todoList.length === 0 ? 1 : todoList[todoList.length - 1].taskId + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task])
    setNewTask('');
  }

  const deleteTask = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    setTodoList(todoList.filter((task) => parseInt(event.currentTarget.parentElement!.dataset.id!) !== task.taskId))
  }

  const completeTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(event.currentTarget.parentElement?.dataset.id)
    setTodoList(todoList.map((task) => task.taskId === parseInt(event.currentTarget.parentElement!.dataset.id!) ? {...task, completed: !task.completed} : task)
    )
  }

 return (
  <div className='w-screen flex flex-col'>
    <h1 className="text-3xl mx-auto">
      Tasks!
    </h1>
    <input className='input-md mx-auto' type="text" onChange={handleChange} value={newTask}/>
    <button className='btn mx-auto' type='button' onClick={addTask}>Add Task</button>
    <div className='list text-center'>
      {todoList.map((task) => <Task key={task.taskId} taskId={task.taskId} completed={task.completed} taskName={task.taskName} deleteTask={deleteTask} completeTask={completeTask}/>)}
    </div>
  </div>
 )
}

export default App