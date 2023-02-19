import { createContext, useEffect, useState } from 'react'
import { Children } from '../interfaces/Children'

import { IItem } from '../interfaces/Item'

interface TaskContextProps {
  tasks: Array<IItem>,
  setTasks: React.Dispatch<React.SetStateAction<Array<IItem>>>,
  selectedTask: IItem,
  setSelectedTask: React.Dispatch<React.SetStateAction<IItem>>
}

const DEFAULT_VALUE: TaskContextProps = { 
  tasks: [], 
  setTasks: () => {}, 
  selectedTask: { 
    id: '', 
    isCompleted: false, 
    isSelected: false, 
    tarefa: '', 
    tempo: '' 
  }, 
  setSelectedTask: () => {} 
}

const TaskContext = createContext<TaskContextProps>(DEFAULT_VALUE)

export const TaskProvider = ({ children }: Children) => {
  const [tasks, setTasks] = useState<Array<IItem>>(DEFAULT_VALUE.tasks)
  const [selectedTask, setSelectedTask] = useState<IItem>(DEFAULT_VALUE.selectedTask)

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
