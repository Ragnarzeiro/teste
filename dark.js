function toggleMode() {
  var body = document.querySelector('body');
  var button = document.querySelector('#mode-toggle-btn');
  
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    button.textContent = 'Modo Escuro';
  } else {
    body.classList.add('dark-mode');
    button.textContent = 'Modo Claro';
  }
}
