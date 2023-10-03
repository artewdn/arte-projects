/*
Project 11: Create Simple Todo List

Steps(Algorithm):
1. create array to store todos,
2. when we click "add",
3. get text from textbox,
4. add the text in the textbox to the array,
5. console.log the array.

*/


const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner', 
  dueDate: '2023-06-20',
}, {
  name: 'wash dishes',
  dueDate: '2023-06-20'
}];      // empty array; step 1.


renderTodoList();   // to show the list on the start


function renderTodoList () {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate } = todoObject;
    
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoListHTML += html;
  });


  // put div element inside JavaScript;
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;    // put the value of todolistHTMl into div element on the page;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
        saveToStorage();
      });
    });

  
}


document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
  addTodo();
});



function addTodo() {
  // 3. get the text in the textbox(use querysleector) and put it in variable inputElement.
  const inputElement = document.querySelector('.js-name-input');
  // to get the text out, use the property of inputElement called value:
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // 4. add the name to the todoList(array) using ".push()":
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  // 5. console the array.
  console.log(todoList);

  // after type the todo, reset it:
  inputElement.value = '';

  renderTodoList();     // to update the list and show them on page AGAIN.

  saveToStorage();

}


function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
  // display the todo list on the page after click 'Add':
  // 1. loop through the array;  back to top 'for loop' ^^;
  // 2. crceate some HTML code for each todo;
  // 3. put the HTML on web page;




