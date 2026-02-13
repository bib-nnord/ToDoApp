import BoardCard from "../BoardCard/BoardCard";
import SidePanelButtons from "../SidePanelButtons/SidePanelButtons";

const SidePanel = ({ boardList, addBoard, deleteBoard, updateBoard, selectBoard, selectedBoardId }) => {
  return (
    <div className="sidePanel">
     <h3>Boards:</h3> 
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

      <SidePanelButtons addBoard={addBoard} />
    </div>
  );
};

export default SidePanel;

