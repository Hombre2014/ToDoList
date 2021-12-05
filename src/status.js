const toDoItems = []; // { data: [] }

let checkBtn = document.querySelectorAll('.fa-square');
let checkMark = document.querySelectorAll('.fa-check');
let toDoText = document.querySelectorAll('.todo');
// const localStorageArr = [];
let markId;
let btnId;

// function storeStatus(index) {
//   // // for (let i = index; i < toDoItems.length; i += 1) {
//   // localStorageArr[index] = {
//   //   description: toDoItems[index].description,
//   //   completed: toDoItems[index].completed,
//   //   index: toDoItems[index].index,
//   //   // };
//   // };
//   localStorage.setItem('toDoList', JSON.stringify(toDoItems));
// }

function getStatus() {
  // if (toDoItems === null) {
  //   return null;
  // }
  console.log(toDoItems);
  if (localStorage.length === 0) {
    console.log('Local storage is empty');
  } else {
    const storedToDoList = JSON.parse(localStorage.getItem('toDoList'));
    // toDoItems.data = storedToDoList
    toDoItems.length = 0;
    toDoItems.push(...storedToDoList);
  }
  return toDoItems;
}

function showItems() {
  const currentItems = getStatus();
  console.log('currentItems: ', currentItems);
  checkBtn = document.querySelectorAll('.fa-square');
  checkMark = document.querySelectorAll('.fa-check');
  toDoText = document.querySelectorAll('.todo');
  for (let i = 0; i < checkBtn.length; i += 1) {
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
}

function checkButton() {
  const btn = checkBtn[checkBtn.length - 1];
  // checkBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btnId = btn.getAttribute('data-id');
    toDoItems[+btnId].completed = true;
    localStorage.setItem('toDoList', JSON.stringify(toDoItems));
    showItems();
    // });
  });
  const mark = checkMark[checkMark.length - 1];
  // checkMark.forEach((mark) => {
  mark.addEventListener('click', () => {
    markId = mark.getAttribute('data-id');
    toDoItems[+markId].completed = false;
    localStorage.setItem('toDoList', JSON.stringify(toDoItems));
    showItems();
  });
  // });
}

export {
  checkButton, showItems, toDoItems, getStatus,
};
