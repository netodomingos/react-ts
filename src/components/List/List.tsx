import { useContext } from 'react'

import TaskContext from '../../contexts/TaskContext'
import Item from './Item/Item'

import style from './style.module.scss'

export default function List() {
	const { tasks } = useContext(TaskContext)

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia ({tasks.length})</h2>
      <ul>
				{
					tasks.map((task) => (
						<Item 
							key={task.id}
							{...task}
						/>
					))
				}
      </ul>
    </aside>
  )
}
