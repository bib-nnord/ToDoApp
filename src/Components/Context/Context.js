import { createContext, useState, useContext } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [productBacklog, setProductBacklog] = useState([]);
  const [sprintBacklog, setSprintBacklog] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const addTask = (category) => {
    const setters = { productBacklog: setProductBacklog, sprintBacklog: setSprintBacklog, inProgress: setInProgress, done: setDone };
    setters[category](prev => [...prev, { text: '', id: Date.now() }]);
  };

  const deleteTask = (category, id) => {
    const setters = { productBacklog: setProductBacklog, sprintBacklog: setSprintBacklog, inProgress: setInProgress, done: setDone };
    setters[category](prev => prev.filter(item => item.id !== id));
  };

  const moveTask = (task, fromCategory, toCategory) => {
    const setters = { productBacklog: setProductBacklog, sprintBacklog: setSprintBacklog, inProgress: setInProgress, done: setDone };
    setters[fromCategory](prev => prev.filter(item => item.id !== task.id));
    setters[toCategory](prev => [...prev, { ...task }]);
  };

  const updateTask = (task, category, newText) => {
    const setters = { productBacklog: setProductBacklog, sprintBacklog: setSprintBacklog, inProgress: setInProgress, done: setDone };
    setters[category](prev => prev.map(item => item.id === task.id ? { ...item, text: newText } : item));
  };

  return (
    <TaskContext.Provider value={{ productBacklog, sprintBacklog, inProgress, done, addTask, deleteTask, moveTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};