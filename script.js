let task;

let addButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');
let itemOfList = document.getElementsByTagName('ol li');

addButton.addEventListener('click', (e) => {
  task = document.querySelector('#texto-tarefa').value;
    
  let listItem = document.createElement('li');
  listItem.innerText = task;
  document.querySelector('#texto-tarefa').value = '';
  document.querySelector('#texto-tarefa').focus();
  taskList.appendChild(listItem);
});
