import Button from '../Button/Button'
import Watch from './Watch/Watch'

import style from './StopWatch.module.scss'

export default function StopWatch() {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

        <div className={style.relogioWrapper}>
            <Watch />
        </div>

        <Button title='Começar'/>
    </div>
  )
}
