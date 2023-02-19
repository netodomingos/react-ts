import { IItem } from '../interfaces/Item'

function UseSelected(task: IItem, tasks: Array<IItem>){
  const newTasks = tasks.map((item) => ({ ...item, isSelected: item.id === task.id ? true : false }))

  return {
    newTasks
  }
}

export default UseSelected