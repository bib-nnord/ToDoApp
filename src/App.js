import React, { useState } from 'react';
import './App.css';
import Category from './Category';

const CATEGORIES = ['productBacklog', 'sprintBacklog', 'inProgress', 'done'];
const CATEGORY_LABELS = {
  productBacklog: 'Product Backlog',
  sprintBacklog: 'Sprint Backlog',
  inProgress: 'In Progress',
  done: 'Done'
};

function App() {
  const [tasks, setTasks] = useState(
    Object.fromEntries(CATEGORIES.map(cat => [cat, []]))
  );
  const [inputs, setInputs] = useState(
    Object.fromEntries(CATEGORIES.map(cat => [cat, '']))
  );

  const addTask = (category, task) => {
    if (task.trim()) {
      setTasks(prev => ({
        ...prev,
        [category]: [...prev[category], { id: Date.now(), text: task.trim() }]
      }));
      setInputs(prev => ({ ...prev, [category]: '' }));
    }
  };

  const deleteTask = (category, id) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].filter(task => task.id !== id)
    }));
  };

  const moveTask = (fromCat, toCat, id) => {
    const task = tasks[fromCat].find(t => t.id === id);
    if (task) {
      setTasks(prev => ({
        ...prev,
        [fromCat]: prev[fromCat].filter(t => t.id !== id),
        [toCat]: [...prev[toCat], task]
      }));
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="categories-container">
        {CATEGORIES.map((category) => (
          <Category
            key={category}
            title={CATEGORY_LABELS[category]}
            categoryKey={category}
            tasks={tasks[category]}
            onAdd={() => addTask(category, inputs[category])}
            onDelete={(id) => deleteTask(category, id)}
            onMove={moveTask}
            inputValue={inputs[category]}
            onInputChange={(val) => setInputs(prev => ({ ...prev, [category]: val }))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;