import React, { useState } from 'react';
import './App.css';
import Category from './Components'
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
        <div className="board">
          <h1>{selectedBoard.text}</h1>
          Categories TODO
        </div>
      )}
      
        {selectedBoard && (
        <CategoryList>
        </CategoryList>
      )}
      </div>
    </>
  );
}

export default App;