const paragraph = document.getElementById("paragraph");
paragraph.style.color = "#a4243bff";

let titulo = document.getElementById("page-title");
titulo.textContent = "O Terminal";

let segundoP = document.getElementById("second-paragraph");
segundoP.textContent = "Aparentemente não sou muito criativo";
segundoP.style.color = "#3fa7d6ff";

let subtitulo = document.getElementById("subtitle");
subtitulo.textContent = "O DOM é maravilhoso";

let texto = document.getElementsByClassName("texto");
console.log(texto);

texto[0].innerHTML = "<b>Dê uma cor</b> para este <i>parágrafo</i>!";

let tag = document.getElementsByTagName("p")[1];
tag.style.backgroundColor = "#f79d84ff";
tag.style.textShadow = "1px 1px 2px black";
console.log(tag);