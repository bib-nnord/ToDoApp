import React, { createContext, useState, useContext } from "react";


 export function addTask(addFunction) {
      addFunction(prev => [...prev, {text: '', id: Date.now()}]);
  }

  export function deleteTask(deleteFunction, id) {
        deleteFunction(prev => prev.filter(item => item.id !== id));
  }

  export function moveTask(task, fromFunction, toFunction) {
        fromFunction(prev => prev.filter(item => item.id !== task.id));
        toFunction(prev => [...prev, {...task}]); 
  }

  export function updateTask(task, updateFunction, newText) {
        updateFunction(prev => prev.map(item => item.id === task.id ? {...item, text: newText} : item));
  }