import { IItem } from '../../../interfaces/Item'

import style from '../style.module.scss'

export default function Item({ tarefa, tempo }: IItem) {
  return (
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}
