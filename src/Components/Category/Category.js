import './Category.css';
import Card from '../Card/Card';

const Category = ({ title, category, onClickLeft, onClickRight, onDelete, updateTask, addTask, categorytext }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
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
      <button onClick={() => addTask(categorytext)}>Add Item</button>
    </div>
  );
};

export default Category;