import './style.css';
import { checkButton, showItems, storeStatus } from './status.js';

function main() {
  storeStatus();
  showItems();
  checkButton();
}

main();