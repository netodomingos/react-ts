import React from 'react'

import style from './style.module.scss'

interface ButtonProps {
  title: string
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className={style.botao}>
      {title}
    </button>
  )
}
