import BoardCard from "../BoardCard/BoardCard";
import { useState } from "react";

const SidePanel = ({ boardList, addBoard, deleteBoard, updateBoard, selectBoard}) => {
    const [newBoardText, setNewBoardText] = useState("");
    
    const handleAddBoard = () => {
      addBoard(newBoardText);
      setNewBoardText("");
    };
    
    return (
    <div className="sidepanel">
      {boardList.map((item) => (
        <BoardCard
            key={item.id}
            item={item}
            onDelete={deleteBoard}
            onUpdate={updateBoard}
        />
      ))}
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

