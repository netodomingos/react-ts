import Button from '../Button/Button'
import Watch from './Watch/Watch'

import style from './StopWatch.module.scss'
import TimeToSeconds from '../../common/utils/time';
import { useContext, useEffect, useState } from 'react';
import TaskContext from '../../contexts/TaskContext';

export default function StopWatch() {
  const { selectedTask } = useContext(TaskContext)
  const [time, setTime] = useState(TimeToSeconds(selectedTask.tempo))

  useEffect(() => {
    setTime(TimeToSeconds(selectedTask.tempo))
  }, [selectedTask])
  

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Watch time={time} />
        </div>

        <Button title='Começar'/>
    </div>
  )
}
