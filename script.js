window.onload = function () {
  const imput = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const clear = document.querySelector('#apaga-tudo');
  const buttonAddLesson = document.querySelector('#criar-tarefa');
  buttonAddLesson.addEventListener('click', function () {
    if (imput.value !== '' && imput.value[0] !== ' ') {
      const newLesson = document.createElement('li');
      newLesson.innerText = imput.value;
      list.appendChild(newLesson);
      imput.value = '';
    }
  });
  list.addEventListener('click', function (event) {
    const line = document.querySelectorAll('li');
    for (let x = 0; x < line.length; x += 1) {
      line[x].removeAttribute('style');
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  list.addEventListener('dblclick', function (event) {
    if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }
  });
  clear.addEventListener('click', function () {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
};
