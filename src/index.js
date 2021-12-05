import './style.css';
import { getStatus } from './status.js';
import { addNewItem, displayStored } from './addNew.js';

function main() {
  // showItems();
  getStatus();
  displayStored();
  addNewItem();
  // storeStatus();
  // checkButton();
}

main();