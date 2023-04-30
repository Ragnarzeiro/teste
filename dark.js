<script>
  var darkMode = false;
  function toggleMode() {
    var body = document.querySelector("body");
    darkMode = !darkMode;
    if(darkMode) {
      body.classList.add("dark-mode");
      document.getElementById("mode-toggle-btn").textContent = "Modo Claro";
    } else {
      body.classList.remove("dark-mode");
      document.getElementById("mode-toggle-btn").textContent = "Modo Escuro";
    }
  }
</script>
