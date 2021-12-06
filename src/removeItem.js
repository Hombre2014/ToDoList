import { context } from './addNew.js';
import { toDoItems, getStatus, showItems } from './status.js';

const textFields = document.querySelectorAll('.todo');
const dotsIcon = document.querySelectorAll('.fa-ellipsis-v');
const trashIcon = document.querySelectorAll('.fa-trash-alt');
const allDivs = document.querySelectorAll('.todo-item');
let fieldId;

function sortItems(itemIndex) {
  const storedItems = getStatus();
  storedItems.splice(itemIndex, 1);
  allDivs[itemIndex].remove();
  for (let i = itemIndex; i < storedItems.length; i += 1) {
    storedItems[itemIndex].index = itemIndex;
    context(itemIndex);
    // allDivs[itemIndex].setAttribute('data-id', itemIndex);
    // checkBtn[itemIndex].setAttribute('data-id', itemIndex);
    // checkMark[itemIndex].setAttribute('data-id', itemIndex);
    // dotsIcon[itemIndex].setAttribute('data-id', itemIndex);
    // trashIcon[itemIndex].setAttribute('data-id', itemIndex);
    // textFields[itemIndex].setAttribute('id', itemIndex);
    // textFields[itemIndex].setAttribute('id', itemIndex);
  }
  localStorage.setItem('toDoList', JSON.stringify(toDoItems));
  showItems();
}

function removeToDo() {
  textFields.forEach((field) => {
    field.addEventListener('click', () => {
      fieldId = field.getAttribute('id');
      allDivs[+fieldId].style.backgroundColor = 'lightyellow';
      textFields[+fieldId].style.backgroundColor = 'lightyellow';
      dotsIcon[+fieldId].classList.add('hide');
      trashIcon[+fieldId].classList.remove('hide');
      trashIcon[+fieldId].addEventListener('click', sortItems(+fieldId));
      textFields[+fieldId].addEventListener('change', () => {
        const newText = textFields[+fieldId].value;
        toDoItems[+fieldId].description = newText;
        localStorage.setItem('toDoList', JSON.stringify(toDoItems));
        textFields[+fieldId].addEventListener('focusout', () => {
          dotsIcon[+fieldId].classList.remove('hide');
          trashIcon[+fieldId].classList.add('hide');
        });
        showItems();
      });
      textFields[+fieldId].addEventListener('focusout', () => {
        allDivs[+fieldId].style.backgroundColor = 'white';
        textFields[+fieldId].style.backgroundColor = 'white';
      });
    });
  });
}

export { removeToDo };