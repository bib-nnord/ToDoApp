import './BoardCard.css';
import BoardCardButtons from '../CardButtons/CardButtons';

const BoardCard = ({ key, item, onDelete, onUpdateBoard}) => {
  return (
    <div className="card">
      <textarea
        value={item.text}
        onChange={(e) => onUpdateBoard(item, e.target.value)}
      />
      <BoardCardButtons
        item={item}
        onDelete={onDelete}
      />
    </div>
  );
};

export default BoardCard;

