function toggleMode() {
  var body = document.querySelector("body");
  var btn = document.querySelector("#mode-toggle-btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    btn.innerText = "Modo Escuro";
  } else {
    body.classList.add("dark-mode");
    btn.innerText = "Modo Claro";
  }
}
