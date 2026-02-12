import React from "react";

   export function addBoard(addBoardFunction, boardText, categories) {
    addBoardFunction(prev => [...prev, {text: boardText, id: Date.now(), categories}]);
  }

  export function onDelete(deleteFunction, id) {
        deleteFunction(prev => prev.filter(item => item.id !== id));
  }

  export function moveTask(task, fromFunction, toFunction) {
        fromFunction(prev => prev.filter(item => item.id !== task.id));
        toFunction(prev => [...prev, {...task}]); 
  }

  export function onUpdate(task, updateFunction, newText) {
        updateFunction(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
  }

  export function addCategory(updateBoardsFunction, selectedBoardId, categoryName) {
        updateBoardsFunction(prev => prev.map(board => board.id === selectedBoardId
            ? { ...board, categories: [...board.categories, { text: categoryName, id: Date.now(), tasks: [] }] }
            : board
        ));
  }

  export function deleteCategory(updateBoardsFunction, selectedBoardId, categoryId) {
        updateBoardsFunction(prev => prev.map(board => board.id === selectedBoardId
            ? { ...board, categories: board.categories.filter(c => c.id !== categoryId) }
            : board
        ));
  }

  export function updateCategory(updateBoardsFunction, selectedBoardId, category, newText) {
        updateBoardsFunction(prev => prev.map(board => board.id === selectedBoardId
            ? { ...board, categories: board.categories.map(c => c.id === category.id ? { ...c, text: newText } : c) }
            : board
        ));
  }

  export function updateCategoryTasks(updateBoardsFunction, selectedBoardId, categoryId, updateFn) {
        updateBoardsFunction(prev => prev.map(board => board.id === selectedBoardId
            ? { ...board, categories: board.categories.map(c => c.id === categoryId ? { ...c, tasks: updateFn(c.tasks) } : c) }
            : board
        ));
  }

