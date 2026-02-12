import './CategoryList.css';
import { useState } from 'react';
import Category from '../Category/Category';
import { moveTask, onDelete, onUpdate, addTask } from '../Utils/Utils';

const CategoryList = ({ categoryList, selectedBoard, addCategory, deleteCategory, updateCategory, updateCategoryTasks }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleAdd = () => {
    addCategory(categoryName);
    setCategoryName('');
  };

  return (
    <div>
      {selectedBoard.text}
      {categoryList.map((item, index) => (
        <Category
          key={item.id}
          title={item.text}
          category={item.tasks}
          onClickLeft={index > 0 ? (task) => {
            updateCategoryTasks(item.id, prev => prev.filter(t => t.id !== task.id));
            updateCategoryTasks(categoryList[index - 1].id, prev => [...prev, task]);
          } : null}
          onClickRight={index < categoryList.length - 1 ? (task) => {
            updateCategoryTasks(item.id, prev => prev.filter(t => t.id !== task.id));
            updateCategoryTasks(categoryList[index + 1].id, prev => [...prev, task]);
          } : null}
          onDelete={(id) => updateCategoryTasks(item.id, prev => prev.filter(t => t.id !== id))}
          updateTask={(task, newText) => updateCategoryTasks(item.id, prev => prev.map(t => t.id === task.id ? { ...t, text: newText } : t))}
          addTask={() => updateCategoryTasks(item.id, prev => [...prev, { text: '', id: Date.now() }])}
        />
      ))}

      <textarea
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="New Category"
      />
      <button onClick={() => handleAdd()}>+</button>
    </div>
  );
};

export default CategoryList;
