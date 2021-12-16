import LocalStorageMock from '../__mocks__/status.js';

describe('Local storage test', () => {
  const localStore = new LocalStorageMock();
  const toDoItems = [];
  localStore.setItem('storedToDoList', []);

  test('Saving the first to do task to the storage', () => {
    const firstTask = { description: 'First', completed: false, index: 0 };
    toDoItems.push(firstTask);
    localStore.setItem('storedToDoList', toDoItems);
    expect(localStore.getItem('storedToDoList').length).toBe(1);
  });
});