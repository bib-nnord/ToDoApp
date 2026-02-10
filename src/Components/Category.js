import React from "react";

const Category = ({ title, category, onClickLeft, onClickRight, onDelete, updateTask, addTask, categorytext}) => {
  return (
    <>
      <div className="category">
        <h2>{title}</h2>
        {category.map((item) => (
          <div key={item.id} className="card">
            <textarea 
              value={item.text}
              onChange={(e) => {
                updateTask(item, e.target.value);
              }}
            />
            <div className="card-buttons">
              {onClickLeft && <button onClick={() => onClickLeft(item)}>{'<'}</button>}
              {onClickRight && <button onClick={() => onClickRight(item)}>{'>'}</button>}
              <button onClick={() => onDelete(item.id)}>X</button>
            </div>
          </div>
        ))}
        <button onClick={() => addTask(categorytext)}>Add Item</button>
      </div>
    </>
  );
};

export default Category;