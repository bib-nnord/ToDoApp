import './Category.css';
import Card from '../Card/Card';

const Category = ({ title, category, onClickLeft, onClickRight, onDelete, updateTask, addTask, onDeleteCategory, onRenameCategory }) => {
  return (
    <div className="category">
      <div className="categoryHeader">
        <h2
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => onRenameCategory(e.target.textContent)}
        >
          {title || "Unnamed Category"}
        </h2>
        <button onClick={onDeleteCategory}>X</button>
      </div>

      {category.map((item) => (
        <Card
          key={item.id}
          item={item}
          onClickLeft={onClickLeft}
          onClickRight={onClickRight}
          onDelete={onDelete}
          updateTask={updateTask}
        />
      ))}
      <button onClick={() => addTask(title)}>Add Item</button>
    </div>
  );
};

export default Category;