import Form from '../components/Form/Form';
import List from '../components/List/List';

import style from './style.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

