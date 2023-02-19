import Form from '../components/Form/Form';
import List from '../components/List/List';
import StopWatch from '../components/StopWatch/StopWatch';
import { TaskProvider } from '../contexts/TaskContext';

import style from './style.module.scss'

export default function App() {
  return (
    <div className={style.AppStyle}>
      <TaskProvider>
        <Form />
        <List />
        <StopWatch />
      </TaskProvider>
    </div>
  );
}

