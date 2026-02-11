import './Card.css';
import CardButtons from '../CardButtons/CardButtons';

const Card = ({ item, onClickLeft, onClickRight, onDelete, updateTask }) => {
  return (
    <div className="card">
      <textarea
        value={item.text}
        onChange={(e) => updateTask(item, e.target.value)}
      />
      <CardButtons
        item={item}
        onClickLeft={onClickLeft}
        onClickRight={onClickRight}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Card;