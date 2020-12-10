function setFocusToInputText() {
  const inputText = document.getElementById('texto-tarefa');
  inputText.focus();
}

function createTask() {
  const inputTextOfTask = document.getElementById('texto-tarefa');
  const taskTextTyped = inputTextOfTask.value;
  const taskList = document.getElementById('lista-tarefas');
  const newTaskElement = document.createElement('li');
  if (taskTextTyped === '') {
    alert('Please type some text to describe your task!');
    setFocusToInputText();
    return null;
  }
  newTaskElement.classList.add('task-item');
  newTaskElement.innerText = taskTextTyped;
  taskList.appendChild(newTaskElement);
  inputTextOfTask.value = '';
  setFocusToInputText();
  return 0;
}

function setTaskAsFinished(evt) {
    if (evt.target.className) {
      unselectTaskItem();
      evt.target.classList.toggle('completed');
    }
    setFocusToInputText();
  }

function unselectTaskItem() {
  const taskItems = document.querySelectorAll('.task-item');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskItems[index].classList.remove('selected-task');
  }
}

function selectTaskItem(evt) {
  if (evt.target.className) {
    unselectTaskItem();
    evt.target.classList.add('selected-task');
    setFocusToInputText();
  }
}

function removeAllTasks() {
  const taskItems = document.getElementsByClassName('task-item');
  const taskList = document.getElementById('lista-tarefas');
  const taskListLength = taskItems.length;
  for (let index = 0; index < taskListLength; index += 1) {
    taskList.removeChild(taskItems[0]);
  }
  setFocusToInputText();
}

const createTaskButton = document.getElementById('criar-tarefa');
const taskOrderedList = document.getElementById('lista-tarefas');
const removeAllTasksButton = document.getElementById('apaga-tudo');
createTaskButton.addEventListener('click', createTask);
taskOrderedList.addEventListener('click', selectTaskItem);
taskOrderedList.addEventListener('dblclick', setTaskAsFinished);
removeAllTasksButton.addEventListener('click', removeAllTasks);