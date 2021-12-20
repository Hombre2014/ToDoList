import LocalStorageMock from './status.js';

const localStore = new LocalStorageMock();
const toDoItems = [];
localStore.setItem('storedToDoList', []);

export const completedItem = () => {
  // Store the first not completed item
  const firstTask = { description: 'First', completed: false, index: 0 };
  toDoItems.push(firstTask);
  localStore.setItem('storedToDoList', toDoItems);
  return toDoItems[0].completed;
};

export const check = () => {
  // Change the stored not completed task to completed
  const changedTask = true;
  toDoItems[0].completed = changedTask;
  localStore.setItem('storedToDoList', toDoItems);
  return toDoItems[0].completed;
};