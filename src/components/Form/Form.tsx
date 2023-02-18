import { useContext, useState } from 'react'
import TaskContext from '../../contexts/TaskContext'
import { IItem } from '../../interfaces/Item'
import Button from '../Button/Button'

import style from './style.module.scss'

export default function Form() {
  const [form, setForm ] = useState<IItem>({ tarefa: '', tempo: '', id: 1 })
  const { task, setTask } = useContext(TaskContext)

	function handleAddTask(event: React.FormEvent<HTMLFormElement>){
		event.preventDefault()

    if(task.length === 0){
      setTask([{ tarefa: form.tarefa, tempo: form.tempo, id: task.length }])
    } else {
      setTask([...task, { tarefa: form.tarefa, tempo: form.tempo, id: task.length }])
    } 
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
                value={form.tarefa}
                onChange={text => setForm({ ...form, tarefa: text.currentTarget.value })}

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
								value={form.tempo}
                onChange={text => setForm({ ...form, tempo: text.currentTarget.value })}
            />
        </div>
        <Button
            title='Adicionar'
            type='submit'
        />
    </form>
  )
}
