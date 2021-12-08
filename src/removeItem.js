// import { displayStored } from './addNew.js';
import { getStatus, toDoItems, showItems } from './status.js';

let textFields = document.querySelectorAll('.todo');
let dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
let trashIcon = document.querySelectorAll('.fa-trash-alt');
let allDivs = document.querySelectorAll('.todo-item');
let label = document.querySelectorAll('.label');
let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');
let fieldId;

function getCurrent() {
  textFields = document.querySelectorAll('.todo');
  dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
  trashIcon = document.querySelectorAll('.fa-trash-alt');
  allDivs = document.querySelectorAll('.todo-item');
  label = document.querySelectorAll('.label');
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
}

function sortToDo(fieldId) {
  getCurrent();
  const unsortedItems = getStatus();
  for (let i = fieldId; i < unsortedItems.length; i += 1) {
    unsortedItems[i].index = i;
    allDivs[i].setAttribute('data-id', i);
    checkBtn[i].setAttribute('data-id', i);
    checkMark[i].setAttribute('data-id', i);
    dotsIcon[i].setAttribute('data-id', i);
    trashIcon[i].setAttribute('data-id', i);
    label[i].setAttribute('for', i);
    textFields[i].setAttribute('id', i);
  }
  localStorage.setItem('toDoList', JSON.stringify(unsortedItems));
  getStatus();
}

// function deleteToDo(fieldId) {
//   const storedItems = getStatus();
//   allDivs[fieldId].remove();
//   getCurrent();
//   storedItems.splice(fieldId, 1);
//   console.log("StoredItems: ", storedItems);
//   localStorage.setItem('toDoList', JSON.stringify(storedItems));
//   getStatus();
//   sortToDo(fieldId);
//   showItems();
// }

// function toggleField(fieldId) {
//   // Toggle focus/out of focus of current Div
//   allDivs[fieldId].addEventListener('click', () => {
//     allDivs[fieldId].style.backgroundColor = 'lightyellow';
//     textFields[fieldId].style.backgroundColor = 'lightyellow';
//     dotsIcon[fieldId].classList.add('hide');
//     trashIcon[fieldId].classList.remove('hide');
//   });
//   allDivs[fieldId].addEventListener('focusout', () => {
//     allDivs[fieldId].style.backgroundColor = 'white';
//     textFields[fieldId].style.backgroundColor = 'white';
//     dotsIcon[fieldId].classList.remove('hide');
//     trashIcon[fieldId].classList.add('hide');
//   });
// }

function editToDo() {
  getCurrent();
  // Select a todo item field
  textFields.forEach((field) => {
    field.addEventListener('click', (e) => {
      console.log(e.relatedTarget);
      fieldId = Number(field.getAttribute('id'));
      // toggleField(fieldId);
      allDivs[fieldId].style.backgroundColor = 'lightyellow';
      textFields[fieldId].style.backgroundColor = 'lightyellow';
      dotsIcon[fieldId].classList.add('hide');
      trashIcon[fieldId].classList.remove('hide');  
      // Delete function
      trashIcon[fieldId].addEventListener('click', () => {
        const storedItems = getStatus();
        getCurrent();
        console.log("All Divs ", allDivs);
        console.log("FiledID: ", fieldId);
        allDivs[fieldId].remove();
        getCurrent();
        storedItems.splice(fieldId, 1);
        localStorage.setItem('toDoList', JSON.stringify(storedItems));
        getStatus();
        sortToDo(fieldId);
        showItems();
        fieldId = undefined;
      });
      // Edit todo item
      textFields[fieldId].addEventListener('change', () => {
        const editedString = textFields[fieldId].value;
        toDoItems[fieldId].description = editedString;
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        getStatus();
      });
      // textFields[fieldId].addEventListener('focusout', () => {
      //   fieldId = Number(field.getAttribute('id'));
      //   allDivs[fieldId].style.backgroundColor = 'white';
      //   textFields[fieldId].style.backgroundColor = 'white';
      //   dotsIcon[fieldId].classList.remove('hide');
      //   trashIcon[fieldId].classList.add('hide');
      // });
    });
  });
  getCurrent();
}

function clearCompleted() {
  const btnClear = document.getElementById('clear-text');
  btnClear.addEventListener('click', () => {
    const markedItems = getStatus();
    for (let i = 0; i < markedItems.length; i += 1) {
      if (markedItems[i].completed === true) {
        getCurrent();
        allDivs[i].remove();
        markedItems.splice(i, 1);
        localStorage.setItem('toDoList', JSON.stringify(markedItems));
        getStatus();
        sortToDo(i);
        showItems();
        i -= 1;
      }
    }
  });
}

export { editToDo, clearCompleted };