import { useContext, createContext, useState} from 'react';
import './App.css';
import Category from './Components';
import { TaskProvider, TaskContext } from './Components';

function AppContent() {
  const { productBacklog, sprintBacklog, inProgress, done, addTask, deleteTask, moveTask, updateTask } = useContext(TaskContext);

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="categories">
        <Category 
          title="Product Backlog"
          category={productBacklog}
          categorytext="productBacklog"
          onClickRight={(task) => moveTask(task, 'productBacklog', 'sprintBacklog')}
          onDelete={(id) => deleteTask('productBacklog', id)}
          updateTask={(task, newText) => updateTask(task, 'productBacklog', newText)}
          addTask={() => addTask('productBacklog')}
        />
        <Category 
          title="Sprint Backlog"
          category={sprintBacklog}
          categorytext="sprintBacklog"
          onClickRight={(task) => moveTask(task, 'sprintBacklog', 'inProgress')}
          onClickLeft={(task) => moveTask(task, 'sprintBacklog', 'productBacklog')}
          onDelete={(id) => deleteTask('sprintBacklog', id)}
          updateTask={(task, newText) => updateTask(task, 'sprintBacklog', newText)}
          addTask={() => addTask('sprintBacklog')}
        />
        <Category 
          title="In Progress"
          category={inProgress}
          categorytext="inProgress"
          onClickRight={(task) => moveTask(task, 'inProgress', 'done')}
          onClickLeft={(task) => moveTask(task, 'inProgress', 'sprintBacklog')}
          onDelete={(id) => deleteTask('inProgress', id)}
          updateTask={(task, newText) => updateTask(task, 'inProgress', newText)}
          addTask={() => addTask('inProgress')}
        />
        <Category 
          title="Done"
          category={done}
          categorytext="done"
          onClickLeft={(task) => moveTask(task, 'done', 'inProgress')}
          onDelete={(id) => deleteTask('done', id)}
          updateTask={(task, newText) => updateTask(task, 'done', newText)}
          addTask={() => addTask('done')}
        />
      </div>
    </div>
  );
}

//i dont really understand why i need to make a separate function for this, but it doesnt recognize the context if i wrap the content of "appcontent" in a taskprovider
function App() {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
}

export default App;