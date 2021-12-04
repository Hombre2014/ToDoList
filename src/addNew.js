import {
  storeStatus, toDoItems, showItems, checkButton, getStatus,
} from './status.js';

const newToDoItem = {
  description: '',
  completed: false,
  index: 0,
};

const fullList = document.querySelector('.full-list');
const enter = document.querySelector('.fa-level-down-alt');
const newItem = document.getElementById('new-item');
let toDoDivsAll = document.querySelectorAll('.todo-item');
let numberIndex = 0;
let toDoText = document.querySelectorAll('.todo');
let itemText = '';

function hitEnter() {
  enter.addEventListener('click', () => {
    newItem.value = '';
  });
}

function context() {
  toDoDivsAll = document.querySelectorAll('.todo-item');
  numberIndex = toDoDivsAll.length;
  const toDoDiv = document.createElement('div');
  toDoDiv.classList.add('todo-item', 'white-height');
  toDoDiv.setAttribute('data-id', `${numberIndex}`);
  toDoDiv.innerHTML = `
  <div class='check-description'>
    <i class='far fa-square' data-id='${numberIndex}'></i>
    <i class='fas fa-check' data-id='${numberIndex}'></i>
    <div class='view'>
      <label class='label' for='${numberIndex}'></label>
      <textarea class='todo' title='description' maxlength='128' id='${numberIndex}'></textarea>
    </div>
  </div>
  <i class='fas fa-ellipsis-v'></i>
  `;
  fullList.appendChild(toDoDiv);
}

function addNewItem() {
  newItem.addEventListener('focusout', () => {
    itemText = newItem.value;
    hitEnter();
    if (itemText !== '' && numberIndex === 0) {
      context();
      toDoText = document.querySelectorAll('.todo');
      toDoText[numberIndex].innerText = itemText;
      newToDoItem.description = itemText;
      newToDoItem.completed = false;
      newToDoItem.index = numberIndex;
      toDoItems.push(newToDoItem);
      storeStatus(numberIndex);
      toDoDivsAll = document.querySelectorAll('.todo-item');
      numberIndex = toDoDivsAll.length;
      showItems();
      checkButton();
    } else if (itemText !== '' && numberIndex !== 0) {
      context();
      toDoText = document.querySelectorAll('.todo');
      // console.log("ToDoItems.before: ", toDoItems);
      toDoText[numberIndex].innerHTML = itemText;
      // console.log("NumberIndex: ", numberIndex);
      newToDoItem.description = itemText;
      // console.log("newToDoItem.description: ", newToDoItem.description);
      newToDoItem.completed = false;
      newToDoItem.index = numberIndex;
      toDoItems.push(newToDoItem);
      // console.log("ToDoItems.push: ", toDoItems);
      storeStatus(numberIndex);
      toDoDivsAll = document.querySelectorAll('.todo-item');
      numberIndex = toDoDivsAll.length;
      showItems();
      checkButton();
    }
  });
}

export { addNewItem, context };