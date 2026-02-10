import React, { useContext } from "react";


  export const productBacklog = createContext([])
  export const sprintBacklog = createContext([])
  export const inProgress = createContext([])
  export const done = createContext([])

 export function addTask(context) {
    useContext(context)
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