$(document).ready(function() {
	const form = $('form');
	const input = $('#tarefa');
	const lista = $('#lista-tarefas');

	form.submit(function(event) {
		event.preventDefault();
		if (input.val().trim()) {
			const tarefa = $('<li>').text(input.val());
			tarefa.css('cursor', 'pointer');
			lista.append(tarefa);
			input.val('');
		}
	});

	lista.on('click', 'li', function() {
		$(this).toggleClass('completed');
	});
});
