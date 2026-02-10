import Category from './Category/Category'
import { addTask, deleteTask, moveTask, updateTask } from './Utils/Utils'
import { TaskContext, TaskProvider, useTasks } from './Context/Context'
import CardButtons from './CardButtons/CardButtons'
import Card from './Card/Card'
export default Category 

export { TaskContext, TaskProvider, addTask, deleteTask, moveTask, updateTask, CardButtons, Card }