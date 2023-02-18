import { useContext } from 'react'

import TaskContext from '../../contexts/TaskContext'
import Item from './Item/Item'

import style from './style.module.scss'

export default function List() {
	const { task } = useContext(TaskContext)

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia ({task.length})</h2>
      <ul>
				{
					task.map((tarefa) => (
						<Item 
							key={tarefa.id}
							{...tarefa}
						/>
					))
				}
      </ul>
    </aside>
  )
}
