function toggleMode() {
  var body = document.querySelector("body");
  var btn = document.querySelector("#mode-toggle-btn");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    btn.innerText = "Modo Escuro";
  } else if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    btn.innerText = "Modo Claro";
  } else {
    body.classList.add("dark-mode");
    btn.innerText = "Modo Claro";
  }
}
