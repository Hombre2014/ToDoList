import './style.css';
import { getStatus } from './status.js';
import { addNewItem, displayStored } from './addNew.js';
import { editToDo } from './removeItem.js';

function main() {
  getStatus();
  displayStored();
  editToDo();
  addNewItem();
}

main();