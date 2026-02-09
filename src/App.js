import React, { useState } from 'react';
import './App.css';
import Category from './Category'
// react state, context and nodejs, 3 branches


function App() {
  const [productBacklog, setProductBacklog] = useState([]);
  const [sprintBacklog, setSprintBacklog] = useState([]);
  const [inProgress, setInProgress  ] = useState([]);
  const [done, setDone] = useState([]);


 function addTask(category) {
    switch(category) {
      case 'productBacklog':
        setProductBacklog(prev => [...prev, {text: '', id: Date.now()}]);
        break;
      case 'sprintBacklog':
        setSprintBacklog(prev => [...prev, {text: '', id: Date.now()}]);
        break;
      case 'inProgress':
        setInProgress(prev => [...prev, {text: '', id: Date.now()}]);
        break;
      case 'done':
        setDone(prev => [...prev, {text: '', id: Date.now()}]);
        break;
      default:
        console.log("error, wrong category");
        break;
    }  
  }

   function deleteTask(category, id) {
    switch(category) {
      case 'productBacklog':
        setProductBacklog(prev => prev.filter(item => item.id !== id));
        break;
      case 'sprintBacklog':
        setSprintBacklog(prev => prev.filter(item => item.id !== id));
        break;
      case 'inProgress':
        setInProgress(prev => prev.filter(item => item.id !== id));
        break;
      case 'done':
        setDone(prev => prev.filter(item => item.id !== id));
        break;
      default:
        console.log("error, wrong category");
        break;
    }  
  }

  function moveTask(task, fromCategory, toCategory) {
    switch(fromCategory) {
      case 'productBacklog':
        setProductBacklog(prev => prev.filter(item => item.id !== task.id));
        break;
      case 'sprintBacklog':
        setSprintBacklog(prev => prev.filter(item => item.id !== task.id));
        break;
      case 'inProgress':
        setInProgress(prev => prev.filter(item => item.id !== task.id));
        break;
      case 'done':
        setDone(prev => prev.filter(item => item.id !== task.id));
        break;
      default:
        console.log("error, nonexistent category");
        break;
    }  

    switch(toCategory) {
      case 'productBacklog':
        setProductBacklog(prev => [...prev, task]);
        break;
      case 'sprintBacklog':
        setSprintBacklog(prev => [...prev, task]);
        break;
      case 'inProgress':
        setInProgress(prev => [...prev, task]);
        break;
      case 'done':
        setDone(prev => [...prev, task]);
        break;
      default:
        console.log("error, wrong category");
        break;
    }  

  }

  function updateTask(task, category, newText) {
    switch(category) {
      case 'productBacklog':
        setProductBacklog(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
        break;
      case 'sprintBacklog':
        setSprintBacklog(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
        break;
      case 'inProgress':
        setInProgress(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
        break;
      case 'done':
        setDone(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
        break;
      default:
        console.log("error, wrong category");
        break;
    } 
  }
  
  return (
    <>
    <div className="app">
      <h1>To-Do List</h1>
      <div className="categories">

        <Category 
          title="Product Backlog"
          category={productBacklog}
          onClickRight={(task) => moveTask(task, 'productBacklog', 'sprintBacklog')}
          onClickLeft={null}
          onDelete={(id) => deleteTask('productBacklog', id)}
          updateTask={(task, newText) => updateTask(task, 'productBacklog', newText)}
          addTask={() => addTask('productBacklog')}
        />

        <Category 
          title="Sprint Backlog"
          category={sprintBacklog}
          onClickRight={(task) => moveTask(task, 'sprintBacklog', 'inProgress')}
          onClickLeft={(task) => moveTask(task, 'sprintBacklog', 'productBacklog')}
          onDelete={(id) => deleteTask('sprintBacklog', id)}
          updateTask={(task, newText) => updateTask(task, 'sprintBacklog', newText)}
          addTask={() => addTask('sprintBacklog')}
        />

        <Category 
          title="In Progress"
          category={inProgress}
          onClickRight={(task) => moveTask(task, 'inProgress', 'done')}
          onClickLeft={(task) => moveTask(task, 'inProgress', 'sprintBacklog')}
          onDelete={(id) => deleteTask('inProgress', id)}
          updateTask={(task, newText) => updateTask(task, 'inProgress', newText)}
          addTask={() => addTask('inProgress')}
        />

        <Category 
          title="Done"
          category={done}
          onClickRight={null}
          onClickLeft={(task) => moveTask(task, 'done', 'inProgress')}
          onDelete={(id) => deleteTask('done', id)}
          updateTask={(task, newText) => updateTask(task, 'done', newText)}
          addTask={() => addTask('done')}
        />

      </div>
    </div>
    </>
  );
}

export default App;