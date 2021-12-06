// import { displayStored } from './addNew.js';
import { getStatus, toDoItems } from './status.js';

let textFields = document.querySelectorAll('.todo');
let dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
let trashIcon = document.querySelectorAll('.fa-trash-alt');
let allDivs = document.querySelectorAll('.todo-item');
let label = document.querySelectorAll('.label');
let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');

function getCurrent() {
  textFields = document.querySelectorAll('.todo');
  dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
  trashIcon = document.querySelectorAll('.fa-trash-alt');
  allDivs = document.querySelectorAll('.todo-item');
  label = document.querySelectorAll('.label');
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
}

let fieldId;

function sortToDo(number) {
  getCurrent();
  const storedItems = getStatus();
  for (let i = number; i < storedItems.length; i += 1) {
    storedItems[i].index = i;
    allDivs[i].setAttribute('data-id', i);
    checkBtn[i].setAttribute('data-id', i);
    checkMark[i].setAttribute('data-id', i);
    dotsIcon[i].setAttribute('data-id', i);
    trashIcon[i].setAttribute('data-id', i);
    label[i].setAttribute('for', i);
    textFields[i].setAttribute('id', i);
  }
}

function deleteToDo(index) {
  const currentList = getStatus();
  allDivs[index].remove();
  currentList.splice(index, 1);
  localStorage.setItem('toDoList', JSON.stringify(currentList));
  sortToDo();
  // displayStored();
}

function editToDo() {
  getCurrent();
  textFields.forEach((field) => {
    field.addEventListener('click', () => {
      fieldId = field.getAttribute('id');
      allDivs[fieldId].style.backgroundColor = 'lightyellow';
      textFields[fieldId].style.backgroundColor = 'lightyellow';
      dotsIcon[fieldId].classList.add('hide');
      trashIcon[fieldId].classList.remove('hide');
      allDivs[fieldId].addEventListener('focusout', () => {
        allDivs[fieldId].style.backgroundColor = 'white';
        textFields[fieldId].style.backgroundColor = 'white';
        dotsIcon[fieldId].classList.remove('hide');
        trashIcon[fieldId].classList.add('hide');
      });
      textFields[fieldId].addEventListener('change', () => {
        const changedText = textFields[fieldId].value;
        toDoItems[fieldId].description = changedText;
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
      });
    });
  });
}

export { editToDo };