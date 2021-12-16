import LocalStorageMock from '../__mocks__/status.js';
import { check, completedItem } from '../__mocks__/completed.js';
// import completedItem from '../__mocks__/completed.js';

describe('Simulate changing status', () => {
  const localStore = new LocalStorageMock();
  let toDoItems = [];
  // localStore.setItem('storedToDoList', []);

  test('First item is not completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    expect(completedItem()).toBe(false);
  });

  test('First item is completed', () => {
    toDoItems = localStore.getItem('ToDoList');
    expect(check()).toBe(true);
  });
});