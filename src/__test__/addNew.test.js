/**
 * @jest-environment jsdom
 */

import addNew from '../addNew.js';

jest.mock('../addNew.js');

describe('Add new To Do task function', () => {
  test('Check the number of div', () => {
    expect(addNew()[0]).toBe(1);
  });
  test('Check the name', () => {
    expect(addNew()[1]).toBe('First');
  });
});