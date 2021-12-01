import './style.css';
import {
  checkButton, storeStatus, getStatus, toDoItems,
} from './status.js';
// import _ from 'lodash';

const toDoText = document.querySelectorAll('.todo');
const labelFor = document.querySelectorAll('.label');
const checkMark = document.querySelectorAll('.fa-check');
const checkBtn = document.querySelectorAll('.fa-square');

function showItems() {
  const currentItems = getStatus();
  console.log(currentItems);
  if (currentItems !== null) {
    for (let i = 0; i < currentItems.length; i += 1) {
      if (currentItems[i].completed) {
        checkMark[i].style.display = 'block';
        checkMark[i].style.color = 'blue';
        checkBtn[i].style.display = 'none';
        toDoText[i].style.textDecoration = 'line-through';
        toDoText[i].style.color = 'lightgrey';

        toDoText[i].innerHTML = toDoItems[i].description;
        toDoText[i].setAttribute('id', `${toDoItems[i].index}`);
        labelFor[i].setAttribute('for', `${toDoItems[i].index}`);
        toDoText[i].parentElement.previousElementSibling.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
        toDoText[i].parentElement.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
      } else {
        checkMark[i].style.display = 'none';
        checkBtn[i].style.display = 'block';

        toDoText[i].innerHTML = toDoItems[i].description;
        toDoText[i].setAttribute('id', `${toDoItems[i].index}`);
        labelFor[i].setAttribute('for', `${toDoItems[i].index}`);
        toDoText[i].parentElement.previousElementSibling.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
        toDoText[i].parentElement.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
      }
    }
  }
}

showItems();
checkButton();