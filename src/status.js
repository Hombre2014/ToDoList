const toDoItems = JSON.parse(localStorage.getItem('toDoList')) || [{
  description: 'This is the first thing to do',
  completed: false,
  index: 0,
},
{
  description: 'This is the second thing to do',
  completed: false,
  index: 1,
},
{
  description: 'This is the third thing to do',
  completed: false,
  index: 2,
}];

const checkBtn = document.querySelectorAll('.fa-square');
const checkMark = document.querySelectorAll('.fa-check');
const toDoText = document.querySelectorAll('.todo');
const labelFor = document.querySelectorAll('.label');
const localStorageArr = [];
let markId;
let btnId;

function storeStatus() {
  for (let i = 0; i < toDoItems.length; i += 1) {
    localStorageArr[i] = {
      description: toDoItems[i].description,
      completed: toDoItems[i].completed,
      index: toDoItems[i].index,
    };
  }
  localStorage.setItem('toDoList', JSON.stringify(localStorageArr));
}

function getStatus() {
  for (let i = 0; i < JSON.parse(localStorage.getItem('toDoList')).length; i += 1) {
    toDoItems[i].description = JSON.parse(localStorage.getItem('toDoList'))[i].description;
    toDoItems[i].completed = JSON.parse(localStorage.getItem('toDoList'))[i].completed;
    toDoItems[i].index = JSON.parse(localStorage.getItem('toDoList'))[i].index;
  }
  return toDoItems;
}

function context(i) {
  toDoText[i].innerHTML = toDoItems[i].description;
  toDoText[i].setAttribute('id', `${toDoItems[i].index}`);
  labelFor[i].setAttribute('for', `${toDoItems[i].index}`);
  toDoText[i].parentElement.previousElementSibling.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
  toDoText[i].parentElement.previousElementSibling.setAttribute('data-id', `${toDoItems[i].index}`);
}

function showItems() {
  const currentItems = getStatus();
  if (currentItems !== null) {
    for (let i = 0; i < currentItems.length; i += 1) {
      if (currentItems[i].completed) {
        checkMark[i].style.display = 'block';
        checkMark[i].style.color = '#36B0E9';
        checkBtn[i].style.display = 'none';
        toDoText[i].style.textDecoration = 'line-through';
        toDoText[i].style.color = 'lightgrey';
        context(i);
      } else {
        checkMark[i].style.display = 'none';
        checkBtn[i].style.display = 'block';
        toDoText[i].style.textDecoration = 'none';
        toDoText[i].style.color = 'black';
        context(i);
      }
    }
  }
}

function checkButton() {
  checkBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      btnId = btn.getAttribute('data-id');
      toDoItems[btnId].completed = true;
      storeStatus();
      showItems();
    });
  });
  checkMark.forEach((mark) => {
    mark.addEventListener('click', () => {
      markId = mark.getAttribute('data-id');
      toDoItems[markId].completed = false;
      storeStatus();
      showItems();
    });
  });
}

export { checkButton, showItems, storeStatus };