import './Card.css';

const Card = ({ item, onClickLeft, onClickRight, onDelete, updateTask }) => {
  return (
    <div className="card">
      <textarea
        value={item.text}
        onChange={(e) => updateTask(item, e.target.value)}
      />
      <div className="card-buttons">
        {onClickLeft && <button onClick={() => onClickLeft(item)}>{'<'}</button>}
        {onClickRight && <button onClick={() => onClickRight(item)}>{'>'}</button>}
        <button onClick={() => onDelete(item.id)}>X</button>
      </div>
    </div>
  );
};

export default Card;