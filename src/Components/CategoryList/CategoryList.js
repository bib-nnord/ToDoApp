import './CategoryList.css';
import { useState } from 'react';

const CategoryList = ({ board, addCategory, deleteCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleAdd = () => {
      addCategory(categoryName);
      setCategoryName('');
  };

  return (
    <div className="board">
    </div>
  );
};

export default CategoryList;