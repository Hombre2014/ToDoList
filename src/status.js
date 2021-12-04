const toDoItems = [];

let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');
let toDoText = document.querySelectorAll('.todo');
const localStorageArr = [];
let markId;
let btnId;

function storeStatus(index) {
  // for (let i = index; i < toDoItems.length; i += 1) {
  localStorageArr[index] = {
    description: toDoItems[index].description,
    completed: toDoItems[index].completed,
    index: toDoItems[index].index,
    // };
  };
  localStorage.setItem('toDoList', JSON.stringify(localStorageArr));
}

function getStatus() {
  // if (toDoItems === null) {
  //   return null;
  // }
  console.log(toDoItems);
  if (localStorage.length === 0) {
    console.log("Local storage is empty");
  } else {
    for (let i = 0; i < toDoItems.length; i += 1) {
      toDoItems[i].description = JSON.parse(localStorage.getItem('toDoList'))[i].description;
      toDoItems[i].completed = JSON.parse(localStorage.getItem('toDoList'))[i].completed;
      toDoItems[i].index = JSON.parse(localStorage.getItem('toDoList'))[i].index;
    }
  }
  return toDoItems;
}

function showItems() {
  const currentItems = getStatus();
  console.log("currentItems: ", currentItems);
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
  toDoText = document.querySelectorAll('.todo');
  if (currentItems.length !== 0) {
    for (let i = 0; i < currentItems.length; i += 1) {
      if (currentItems[i].completed) {
        checkMark[i].style.display = 'block';
        checkMark[i].style.color = '#36B0E9';
        checkBtn[i].style.display = 'none';
        toDoText[i].style.textDecoration = 'line-through';
        toDoText[i].style.color = 'lightgrey';
      } else {
        checkMark[i].style.display = 'none';
        checkBtn[i].style.display = 'block';
        toDoText[i].style.textDecoration = 'none';
        toDoText[i].style.color = 'black';
      }
    }
  } else {
    console.log('LocalStorage array (currentItems) is Empty');
  }
}

function checkButton() {
  checkBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      btnId = btn.getAttribute('data-id');
      toDoItems[btnId].completed = true;
      storeStatus(btnId);
    });
  });
  checkMark.forEach((mark) => {
    mark.addEventListener('click', () => {
      markId = mark.getAttribute('data-id');
      toDoItems[markId].completed = false;
      storeStatus(markId);
    });
  });
}

export {
  checkButton, showItems, storeStatus, toDoItems, getStatus,
};