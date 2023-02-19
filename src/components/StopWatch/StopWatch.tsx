import { useContext, useEffect, useState } from 'react';
import Button from '../Button/Button'
import Watch from './Watch/Watch'

import style from './StopWatch.module.scss'
import TimeToSeconds from '../../common/utils/time';
import TaskContext from '../../contexts/TaskContext';
import UseCompletedTask from '../../hooks/useCompletedTask';

export default function StopWatch() {
  const { selectedTask, tasks, setTasks } = useContext(TaskContext)
  const [time, setTime] = useState(0)

  useEffect(() => {
    setTime(TimeToSeconds(selectedTask.tempo))
  }, [selectedTask])
  
  function regressive(count: number){
    setTimeout(() => {
      if(count > 0){
        setTime(count - 1)
        return regressive(count - 1)
      } else {
        const { newTasks } = UseCompletedTask(selectedTask, tasks)
        setTasks(newTasks)
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Watch time={time} />
        </div>

        <Button 
          title='Começar'
          onClick={() => regressive(time)}
        />
    </div>
  )
}
