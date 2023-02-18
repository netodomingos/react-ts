import { createContext, useState } from 'react'
import { Children } from '../interfaces/Children'

import { IItem } from '../interfaces/Item'

interface TaskContextProps {
  task: Array<IItem>,
  setTask: React.Dispatch<React.SetStateAction<Array<IItem>>>
}

const DEFAULT_VALUE: TaskContextProps = { task: [], setTask: () => {} }

const TaskContext = createContext<TaskContextProps>(DEFAULT_VALUE)

export const TaskProvider = ({ children }: Children) => {
  const [task, setTask] = useState<Array<IItem>>([])

  return (
    <TaskContext.Provider
      value={{ task, setTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
