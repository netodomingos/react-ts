import UseTimeConvertion from '../../../hooks/useTimeConvertion'
import style from './Watch.module.scss'

interface WatchProps {
  time: number
}

export default function Watch({ time = 0 }: WatchProps) {
  const { minDez, minUnit, secDez, secUnit } = UseTimeConvertion(time)

  return (
    <>
        <span className={style.relogioNumero}>{minDez}</span>
        <span className={style.relogioNumero}>{minUnit}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{secDez}</span>
        <span className={style.relogioNumero}>{secUnit}</span>
    </>
  )
}
