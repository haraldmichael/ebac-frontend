const form = document.querySelector('form');
const input = document.querySelector('#tarefa');
const lista = document.querySelector('#lista-tarefas');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (input.value.trim()) {
		const tarefa = document.createElement('li');
		tarefa.innerText = input.value;
		tarefa.style.cursor = "pointer";
		lista.appendChild(tarefa);
		input.value = '';
	}
});

lista.addEventListener('click', (event) => {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
});
