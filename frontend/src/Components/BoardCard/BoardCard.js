import './BoardCard.css';
import BoardCardButtons from '../BoardCardButtons/BoardCardButtons';

const BoardCard = ({ item, onDelete, onUpdateBoard }) => {
  return (
    <div className="card">
      <h3
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onUpdateBoard(item, e.target.textContent)}
      >
        {item.text || "Unnamed Board"}
      </h3>
      <BoardCardButtons
        item={item}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BoardCard;

