import './CategoryList.css';
import Category from '../Category/Category';
import CategoryListButtons from '../CategoryListButtons/CategoryListButtons';

const CategoryList = ({ categoryList, selectedBoard, addCategory, deleteCategory, updateCategory, updateCategoryTasks }) => {

  return (
    <div>
      <h2>{selectedBoard.text ? selectedBoard.text : "Unnamed Board"}</h2>
      <div className="category-list">
        {categoryList.map((item, index) => (
          <Category
            key={item.id}
            title={item.text}
            category={item.tasks}
            onDeleteCategory={() => deleteCategory(item.id)}
            onRenameCategory={(newText) => updateCategory(item, newText)}
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
      </div>

      <CategoryListButtons addCategory={addCategory} />
    </div>
  );
};

export default CategoryList;
