import React, { useState } from 'react';
import './App.css';
import Category from './Components'
import { addTask, deleteTask, moveTask, updateTask } from './Components'
// react state, context and nodejs, 3 branches


function App() {

  const [boards, setBoards] = useState([]);
  const [categories, setCategories] = useState([]);

  return (
    <>
      <div className="app">
          <SidePanel
          />

          <CategoryList
          boardtitle="Todo"
          />
      </div>
    </>
  );
}

export default App;