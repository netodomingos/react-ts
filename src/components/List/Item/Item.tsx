import { Iitem } from '../../../interfaces/item'

import style from '../style.module.scss'

export default function Item({ tarefa, tempo }: Iitem) {
  return (
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}
