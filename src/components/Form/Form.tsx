import React from 'react'
import Button from '../Button/Button'

import './style.scss'

export default function Form() {
  return (
    <form className='novaTarefa'>
        <div className='inputContainer'>
            <label htmlFor="tarefa">Adicione um novo estudo</label>
            <input 
                type="text" 
                name='tarefa'
                id='tarefa'
                placeholder='O que voce quer estudar?'
                required
            />
        </div>
        <div className='inputContainer'>
            <label htmlFor="tempo">Tempo</label>
            <input 
                type="time" 
                name='tempo'
                step='1'
                id='tempo'
                min='00:00:00'
                max='01:30:00'
                required
            />
        </div>

        <Button/>
    </form>
  )
}
