import React from 'react'

import style from '../style.module.scss'

interface ItemProps {
    tarefa: string,
    tempo: string,
}

export default function Item({ tarefa, tempo }: ItemProps) {
  return (
    <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
  )
}
