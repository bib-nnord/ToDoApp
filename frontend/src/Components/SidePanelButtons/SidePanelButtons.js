import { useState } from "react";
import './SidePanelButtons.css';

const SidePanelButtons = ({ addBoard }) => {
  const [newBoardText, setNewBoardText] = useState("");

  const handleAddBoard = () => {
    addBoard(newBoardText);
    setNewBoardText("");
  };

  return (
    <div className="sidepanel-buttons">
      <textarea
        value={newBoardText}
        onChange={(e) => setNewBoardText(e.target.value)}
        placeholder="New board"
      />
      <button onClick={() => handleAddBoard()}>+</button>
    </div>
  );
};

export default SidePanelButtons;