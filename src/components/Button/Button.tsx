import { IButton } from '../../interfaces/Button'

import style from './style.module.scss'

export default function Button({ title, type, onClick }: IButton) {
  return (
    <button className={style.botao} type={type} onClick={onClick}>
      {title}
    </button>
  )
}
