const BoardCardButtons = ({ item, onDelete }) => {
  return (
    <div className="card-buttons">
      <button onClick={() => onDelete(item.id)}>X</button>
    </div>
  );
};

export default BoardCardButtons;