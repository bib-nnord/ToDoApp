import React, { useState } from 'react';
import './App.css';
import Category from './Components'
import CategoryList from './Components/CategoryList/CategoryList';
import { addTask, onDelete, moveTask, onUpdate, addBoard, addCategory, deleteCategory, updateCategory, updateCategoryTasks, SidePanel } from './Components'

function App() {

  const [boards, setBoards] = useState([]);
  const [selectedBoardId, setSelectedBoardId] = useState(null);

  const selectedBoard = boards.find(board => board.id === selectedBoardId) || null;

  return (
    <>
      <div className="app">
          <SidePanel
          boardList={boards}
          addBoard={(boardText) => addBoard(setBoards, boardText, [])}
          deleteBoard={(id) => onDelete(setBoards, id)}
          updateBoard={(board, newText) => onUpdate(board, setBoards, newText)}
          selectBoard={setSelectedBoardId}
          selectedBoardId={selectedBoardId}
          />

        <div className="board">
          {selectedBoard && (
            <CategoryList
              categoryList={selectedBoard.categories}
              selectedBoard={selectedBoard}
              addCategory={(categoryName) => addCategory(setBoards, selectedBoardId, categoryName)}
              deleteCategory={(categoryId) => deleteCategory(setBoards, selectedBoardId, categoryId)}
              updateCategory={(category, newText) => updateCategory(setBoards, selectedBoardId, category, newText)}
              updateCategoryTasks={(categoryId, updateFn) => updateCategoryTasks(setBoards, selectedBoardId, categoryId, updateFn)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;