import './style.css';
import { getStatus } from './status.js';
import { displayStored } from './addNew.js';
import { editToDo, clearCompleted } from './removeItem.js';

function main() {
  getStatus();
  displayStored();
  editToDo();
  clearCompleted();
}

main();