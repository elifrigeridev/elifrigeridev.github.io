let lampada = document.getElementById("lampada");
let root = document.documentElement;

lampada.addEventListener("click", () => {
  root.classList.toggle("tema-claro");
});
