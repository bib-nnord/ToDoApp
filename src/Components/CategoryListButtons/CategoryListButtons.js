import { useState } from "react";
import './CategoryListButtons.css';

const CategoryListButtons = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleAdd = () => {
    addCategory(categoryName);
    setCategoryName("");
  };

  return (
    <div className="categorylist-buttons">
      <textarea
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="New Category"
      />
      <button onClick={() => handleAdd()}>+</button>
    </div>
  );
};

export default CategoryListButtons;