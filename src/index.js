import './style.css';

const toDoItems = [{
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
  index: 0,
}];

const toDoText = document.querySelectorAll('.todo');
const labelFor = document.querySelectorAll('.label');
const checkMark = document.querySelectorAll('.fa-check');
const checkBtn = document.querySelectorAll('.fa-square');

function showItems() {
  checkMark.forEach((checkMark) => {
    checkMark.style.display = 'none';
  });
  checkBtn.forEach((checkBtn) => {
    checkBtn.style.display = 'block';
  });
  for (let i = 0; i < toDoItems.length; i += 1) {
    toDoText[i].innerHTML = toDoItems[i].description;
    toDoText[i].setAttribute('data-hidden', toDoItems[i].completed);
    toDoText[i].setAttribute('id', `${toDoItems[i].index}`);
    labelFor[i].setAttribute('for', `${toDoItems[i].index}`);
  }
}

showItems();