import './CategoryList.css';
import { useState } from 'react';

const CategoryList = ({ categoryList, selectedBoard, addCategory, deleteCategory,updateCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleAdd = () => {
      addCategory(categoryName);
      setCategoryName('');
  };

  return (
    <div className="board">
        {selectedBoard.text}
    </div>
  );
};

export default CategoryList;
