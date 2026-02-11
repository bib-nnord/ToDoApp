import React, { useState } from 'react';
import './App.css';
import Category from './Components'
import CategoryList from './Components/CategoryList/CategoryList';
import { addTask, onDelete, moveTask, onUpdate, addBoard, SidePanel, deleteBoard, updateBoard} from './Components'
// react state, context and nodejs, 3 branches


function App() {

  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);
  const [categories, setCategories] = useState([]);

  const selectedBoard = boards.find(board => board.id === selectedBoardId) || null;


  return (
    <>
      <div className="app">
          <SidePanel
          boardList={boards}
          addBoard={(boardText) => addBoard(setBoards, boardText)}
          deleteBoard={(id) => onDelete(setBoards, id)}
          updateBoard={(board, newText) => onUpdate(board, setBoards, newText)}
          selectBoard={setSelectedBoardId}
          selectedBoardId={selectedBoardId}
          />

        {selectedBoard && (
        <CategoryList
          categoryList = {categories}
          selectedBoard = {selectedBoardId}
          addCategory={(categoryName) => addBoard(setCategories, categoryName)}
          deleteCategory={(id) => onDelete(setCategories, id)}
          updateCategory={(category, newText) => onUpdate(category, setCategories, newText)}
        />
      )}
      </div>
    </>
  );
}

export default App;