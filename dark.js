<script>
  var modeToggleBtn = document.getElementById('mode-toggle-btn');
  var body = document.body;

  function toggleMode() {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      modeToggleBtn.innerText = 'Modo Escuro';
    } else {
      body.classList.add('dark-mode');
      modeToggleBtn.innerText = 'Modo Claro';
    }
  }
</script>
