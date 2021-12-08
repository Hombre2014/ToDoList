import './style.css';
import { getStatus, showItems } from './status.js';
import { addNewItem, displayStored } from './addNew.js';
import { editToDo, clearCompleted } from './removeItem.js';
function main() {
  getStatus();
  displayStored();
  editToDo();
  clearCompleted();
  // showItems();
}

main();