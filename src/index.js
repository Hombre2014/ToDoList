import './style.css';
import { checkButton, showItems, storeStatus } from './status.js';
import { addNewItem } from './addNew.js';

function main() {
  showItems();
  addNewItem();
  // storeStatus();
  // checkButton();
}

main();