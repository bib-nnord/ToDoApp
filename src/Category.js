import React from 'react';

function Category({ title, tasks, categoryKey, onAdd, onDelete, onMove, inputValue, onInputChange }) {
  const handleDragStart = (e, taskId) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('fromCategory', categoryKey);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData('taskId'));
    const fromCategory = e.dataTransfer.getData('fromCategory');
    if (fromCategory !== categoryKey) {
      onMove(fromCategory, categoryKey, taskId);
    }
  };

  return (
    <div className="category" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2>{title}</h2>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={`Add to ${title}`}
          onKeyPress={(e) => e.key === 'Enter' && onAdd()}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li
            key={task.id}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, task.id)}
          >
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)} className="btn-delete">✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;