import React from 'react'

import style from './style.module.scss'

export default function List() {
	const tarefas = [
		{
			tarefa: 'React',
			tempo: '02:00:00'
		},
		{
			tarefa: 'JavaScript',
			tempo: '01:00:00'
		}
	]

  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
		{
			tarefas.map((tarefa, index) => (
				<li key={index} className={style.item}>
					<h3>{tarefa.tarefa}</h3>
					<span>{tarefa.tempo}</span>
				</li>
			))
		}
        </ul>
    </aside>
  )
}
