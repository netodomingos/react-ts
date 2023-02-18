import { useState } from 'react'
import { IItem } from '../../interfaces/Item'
import Button from '../Button/Button'

import style from './style.module.scss'

export default function Form() {
	const [task, setTask] = useState<IItem>({ tarefa: '', tempo: '00:00' })

	function handleAddTask(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault()
		
		console.log(task);
		// console.log(time);
	}

  return (
    <form className={style.novaTarefa} onSubmit={(event) => handleAddTask(event)}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input 
                type="text" 
                name='tarefa'
                id='tarefa'
                placeholder='O que voce quer estudar?'
                required
                value={task.tarefa}
                onChange={text => setTask({ ...task, tarefa: text.currentTarget.value })}

            />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo">Tempo</label>
            <input 
                type="time" 
                name='tempo'
                step='1'
                id='tempo'
                min='00:00:00'
                max='01:30:00'
                required
								value={task.tempo}
                onChange={text => setTask({ ...task, tempo: text.currentTarget.value })}
            />
        </div>
        <Button
            title='Adicionar'
        />
    </form>
  )
}
