let qs = (query) => {
  return document.querySelector(query);
};
let main = qs("main");
let h2 = qs("h2");
let body = qs("body");
let a = qs("a");
let parrafos = document.querySelectorAll("p");
let nombre = prompt("ingrese su nombre");
if (!nombre) {
  h2.innerText = "Invitado";
} else {
  h2.innerText = nombre;
}
(h2.style.textTransform = "uppercase"), (a.style.color = "#E51B3E");

if (confirm("¿Desea colocar un fondo de pantalla?")) {
  body.classList.add("fondo");
}
parrafos.forEach((p, i) => {
  if (i % 2 == 0) {
    p.classList.add("destacadoPar")
  } else {
    p.classList.add("destacadoImpar")  
}
});

main.style.display = "block";
