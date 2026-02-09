import React from "react";

const Category =({title, category, onClickLeft, onClickRight}) => {
    return ( <>
            <div className="category">
          <h2>{title}</h2>
          
          {{category}.map((item) => (
            <div key={item.id} className="card">
                <textarea onChange={(e) => updateTask(item, {category}, e.target.value)}>{item.text}</textarea>
                {onClickLeft && <button onClick={() => moveTask(item, {category}, {onClickLeft})}>{'<'}</button> }
                {onClickRight && <button onClick={() => moveTask(item, {category}, {onClickRight})}>{'>'}</button> }
                <button onClick={() => deleteTask({category}, item.id)}>X</button>
            </div>
          ))}
          
          <button onClick={() => addTask({category})}>{title}</button>
        </div>
    </>)
}