import React, { useState } from 'react';
import './App.css';

// react state, context and nodejs, 3 branches


function App() {
  const [productBacklog, setProductBacklog] = useState([]);
  const [sprintBacklog, setSprintBacklog] = useState([]);
  const [inProgress, setInProgress  ] = useState([]);
  const [done, setDone] = useState([]);


  async function addTask(category) {
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

    async function deleteTask(category, id) {
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

        <div className="category">
          <h2>Product Backlog</h2>
          
          {productBacklog.map((item) => (
            <div key={item.id} className="card">
              <textarea onChange={(e) => updateTask(item, 'productBacklog', e.target.value)}>{item.text}</textarea>
              <button onClick={() => moveTask(item, 'productBacklog', 'sprintBacklog')}>{'>'}</button>
              <button onClick={() => deleteTask('productBacklog', item.id)}>X</button>
            </div>
          ))}
          
          <button onClick={() => addTask('productBacklog')}>Add Item</button>
        </div>

        <div className="category">
          <h2>Sprint Backlog</h2>
          {sprintBacklog.map((item) => (
            <div key={item.id} className="card">
              <textarea onChange={(e) => updateTask(item, 'sprintBacklog', e.target.value)}>{item.text}</textarea>
              <button onClick={() => moveTask(item, 'sprintBacklog', 'inProgress')}>{'>'}</button>
                            <button onClick={() => moveTask(item, 'sprintBacklog', 'productBacklog')}>{'<'}</button>
              <button onClick={() => deleteTask('sprintBacklog', item.id)}>X</button>
            </div>
          ))}
          <button onClick={() => addTask('sprintBacklog')}>Add Item</button>
        </div>

        <div className="category">
          <h2>In Progress</h2>

          {inProgress.map((item) => (
            <div key={item.id} className="card">
              <textarea onChange={(e) => updateTask(item, 'inProgress', e.target.value)}>{item.text}</textarea>

              <button onClick={() => moveTask(item, 'inProgress', 'done')}>{'>'}</button>
                            <button onClick={() => moveTask(item, 'inProgress', 'sprintBacklog')}>{'<'}</button>
              <button onClick={() => deleteTask('inProgress', item.id)}>X</button>
            </div>
          ))}


          <button onClick={() => addTask('inProgress')}>Add Item</button>
        </div>     

        <div className="category">
          <h2>Done</h2>
          {done.map((item) => (  
            <div key={item.id} className="card">
              <textarea onChange={(e) => updateTask(item, 'done', e.target.value)}>{item.text}</textarea>
              <button onClick={() => moveTask(item, 'done', 'inProgress')}>{'<'}</button>
              <button onClick={() => deleteTask('done', item.id)}>X</button>
            </div>
          ))}
          <button onClick={() => addTask('done')}>Add Item</button>
        </div>    
      </div>
    </div>
    </>
  );
}

export default App;