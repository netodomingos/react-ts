import { useState } from 'react'
import Item from './Item/Item'

import style from './style.module.scss'

export default function List() {
	const [tarefas, setTarefas] = useState([
		{
			tarefa: 'React',
			tempo: '02:00:00'
		},
		{
			tarefa: 'JavaScript',
			tempo: '01:00:00'
		}
	])

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
				{
					tarefas.map((tarefa, index) => (
						<Item 
							key={index}
							{...tarefa}
						/>
					))
				}
      </ul>
    </aside>
  )
}
