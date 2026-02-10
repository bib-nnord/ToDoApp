import { useContext, createContext, useState} from 'react';
import './App.css';
import Category from './Components'
import { ContextWrapper, addTask, deleteTask, moveTask, updateTask} from './Components'
//react context
function App() {
  

const [productBacklog, setProductBacklog] = useState([]);
const [sprintBacklog, setSprintBacklog] = useState([]);
const [inProgress, setInProgress  ] = useState([]);
const [done, setDone] = useState([]);


  return (
    <>
      <ContextWrapper value = {{ productBacklog, sprintBacklog, inProgress, done }}>
        <div className="app">
          <h1>To-Do List</h1>
          <div className="categories">
            <Category 
              title="Product Backlog"
              category={productBacklog}
              categorytext ='productBacklog'
              onClickRight={(task) => moveTask(task, setProductBacklog, setSprintBacklog)}
              onDelete={(id) => deleteTask(setProductBacklog, id)}
              updateTask={(task, newText) => updateTask(task, setProductBacklog, newText)}
              addTask={() => addTask(setProductBacklog)}
            />
            <Category 
              title="Sprint Backlog"
              category={sprintBacklog}
              categorytext ='sprintBacklog'
              onClickRight={(task) => moveTask(task, setSprintBacklog, setInProgress)}
              onClickLeft={(task) => moveTask(task, setSprintBacklog, setProductBacklog)}
              onDelete={(id) => deleteTask(setSprintBacklog, id)}
              updateTask={(task, newText) => updateTask(task, setSprintBacklog, newText)}
              addTask={() => addTask(setSprintBacklog)}
            />
            <Category 
              title="In Progress"
              category={inProgress}
              categorytext ='inProgress'
              onClickRight={(task) => moveTask(task, setInProgress, setDone)}
              onClickLeft={(task) => moveTask(task, setInProgress, setSprintBacklog)}
              onDelete={(id) => deleteTask(setInProgress, id)}
              updateTask={(task, newText) => updateTask(task, setInProgress, newText)}
              addTask={() => addTask(setInProgress)}
            />
            <Category 
              title="Done"
              category={done}
              categorytext ='done'
              onClickLeft={(task) => moveTask(task, setDone, setInProgress)}
              onDelete={(id) => deleteTask(setDone, id)}
              updateTask={(task, newText) => updateTask(task, setDone, newText)}
              addTask={() => addTask(setDone)}
            />
          </div>
        </div>
          
      </ContextWrapper>
    </>
  );
}

export default App;