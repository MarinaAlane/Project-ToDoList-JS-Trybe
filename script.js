document.getElementById('criar-tarefa').addEventListener('click', function (){
  const task1 = document.querySelector('input').value;
  const li = document.createElement('li');
  document.querySelector('input').value = '';
  li.innerText = task1;
  document.getElementById('lista-tarefas').appendChild(li);
})

function paintItem() {
    let taskList = document.getElementById('lista-tarefas');
    taskList.addEventListener('click', function(event) {
        let getList = document.getElementsByTagName('li');
        for (let i = 0; i < getList.length; i++) {
            getList[i].style.backgroundColor = ''
        }
        if (event.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        }
    });
}

paintItem();