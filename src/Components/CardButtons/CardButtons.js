const CardButtons = ({ item, onClickLeft, onClickRight, onDelete }) => {
  return (
    <div className="card-buttons">
      {onClickLeft && <button onClick={() => onClickLeft(item)}>{'<'}</button>}
      {onClickRight && <button onClick={() => onClickRight(item)}>{'>'}</button>}
      <button onClick={() => onDelete(item.id)}>X</button>
    </div>
  );
};

export default CardButtons;