import BoardCard from "../BoardCard/BoardCard";
import { useState } from "react";

const SidePanel = ({ boardList, addBoard, deleteBoard, updateBoard, selectBoard, selectedBoardId}) => {
    const [newBoardText, setNewBoardText] = useState("");
    
    const handleAddBoard = () => {
      addBoard(newBoardText);
      setNewBoardText("");
    };
    
    return (
    <div className="sidepanel">
      <ul>
        {boardList.map((item) => (
          <li
            key={item.id}
            onClick={() => selectBoard(item.id)}
            className={selectedBoardId === item.id ? "board-item selected" : "board-item"}
          >
            <BoardCard
              item={item}
              onDelete={deleteBoard}
              onUpdateBoard={updateBoard}
            />
          </li>
        ))}
      </ul>
        <textarea
            value={newBoardText}
            onChange={(e) => setNewBoardText(e.target.value)}
            placeholder="New board"
        />
      <button onClick={() => handleAddBoard()}>+</button>
    </div>
  );
};

export default SidePanel;

