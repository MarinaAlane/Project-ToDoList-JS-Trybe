const text = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const orderedList = document.querySelector('#lista-tarefas');
const list = document.createElement('li');
list.className = 'todo-list';
const buttonsSection = document.querySelector('#buttons');

// Adiciona as tarefas
function addTask() {
  button.addEventListener('click', function () {
    if (text.value === '') {
      alert('[ERRO!] - Digite algum valor!');
    } else {
      const lists = document.createElement('li');
      lists.className = 'todo-list';
      orderedList.appendChild(lists);
      lists.innerText = text.value;
      text.value = '';
    }
  });
}
