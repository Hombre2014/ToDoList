/**
 * @jest-environment jsdom
 */

// eslint-disable-next-line import/named
import { createCompleted, checkedItem, btnClear } from '../__mocks__/clearAllCompleted.js';
import LocalStorageMock from '../__mocks__/status.js';

const localStore = new LocalStorageMock();
localStore.setItem('storedToDoList', []);

describe('Clear all completed function test', () => {
  test('Check we have 2 completed items in local storage', () => {
    expect(checkedItem().length).toBe(2);
  });

  test('Check the first item is completed', () => {
    expect(checkedItem()[0].completed).toBe(true);
  });

  test('Check the second item is completed', () => {
    expect(checkedItem()[1].completed).toBe(true);
  });

  test('Check that we have two items in the DOM', () => {
    expect(createCompleted()).toBe(2);
  });

  // Invoke the Clear All Completed button

  test('Check that there are no items in the DOM', () => {
    expect(btnClear()[0]).toBe(0);
  });

  test('Check that we have no items left in the localStorage', () => {
    expect(btnClear()[1]).toBe(0);
  });
});