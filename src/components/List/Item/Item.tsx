import { useContext } from 'react'
import TaskContext from '../../../contexts/TaskContext'
import UseSelected from '../../../hooks/useSelectTask'
import { IItem } from '../../../interfaces/Item'

import style from './style.module.scss'

export default function Item(task: IItem) {
  const { setSelectedTask, setTasks, tasks } = useContext(TaskContext)

  function handleSelectTask(){
    const { newTasks } = UseSelected(task, tasks)
    setSelectedTask(task)
    setTasks(newTasks)
  }
  
  return (
    <li 
      className={`${style.item} ${task.isSelected && style.itemSelecionado} ${task.isCompleted && style.itemCompletado}`}  
      onClick={() => !task.isCompleted && handleSelectTask()}
    >
      <h3>{task.tarefa}</h3>
      <span>{task.tempo}</span>
      {task.isCompleted && <span className={style.concluido} aria-label="tarefa completada"></span>} 
    </li>
  )
}
