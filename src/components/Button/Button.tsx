import { IButton } from '../../interfaces/Button'

import style from './style.module.scss'

export default function Button({ title, type }: IButton) {
  return (
    <button className={style.botao} type={type}>
      {title}
    </button>
  )
}
