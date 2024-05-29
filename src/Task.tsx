import type { Task as TaskType } from './App.tsx'

type TaskProps = TaskType & {
  deleteTask: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  completeTask: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
} 

const Task = ({ taskName, deleteTask, taskId, completeTask, completed }: TaskProps) => {
    
 return (
  <div data-id={taskId} 
    className={
      completed ? 'bg-secondary' : ''
    }
  >
    <p  onClick={deleteTask}>{taskName}</p>
    <button className='btn btn-xs' type='button' onClick={completeTask}>Complete</button>
  </div>
)
}

export default Task