import React from "react";

const Category = ({ title, category, onClickLeft, onClickRight, onDelete, updateTask, addTask }) => {
  return (
    <>
      <div className="category">
        <h2>{title}</h2>
        {category.map((item) => (
          <div key={item.id} className="card">
            <textarea onChange={(e) => updateTask(item, category, e.target.value)}>
              {item.text}
            </textarea>
            {onClickRight && <button onClick={() => onClickRight(item)}>{'>'}</button>}
            {onClickLeft && <button onClick={() => onClickLeft(item)}>{'<'}</button>}
            <button onClick={() => onDelete(item.id)}>X</button>
          </div>
        ))}
        <button onClick={() => addTask(category)}>Add Item</button>
      </div>
    </>
  );
};

export default Category;