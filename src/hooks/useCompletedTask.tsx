import { IItem } from '../interfaces/Item'

function UseCompletedTask(task: IItem, tasks: Array<IItem>){
  const newTasks = tasks.map((item) => ({ ...item, isCompleted: item.id === task.id ? true : false }))

  return { newTasks }
}

export default UseCompletedTask