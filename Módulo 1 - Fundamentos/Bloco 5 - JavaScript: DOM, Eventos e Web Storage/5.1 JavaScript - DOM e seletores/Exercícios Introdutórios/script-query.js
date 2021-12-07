const paragraph = document.querySelector('#paragraph');
paragraph.style.color = '#a4243bff';

let titulo = document.querySelector('#page-title');
titulo.textContent = 'O Terminal';

let segundoP = document.querySelector('#second-paragraph');
segundoP.textContent = 'Aparentemente não sou muito criativo.';
segundoP.style.color = '#3fa7d6ff';

let subtitulo = document.querySelector('#subtitle');
subtitulo.textContent = 'O DOM é maravilhoso';

let texto = document.querySelector('.texto');
console.log(texto);

texto.innerHTML = '<b>Dê uma cor</b> para este <i>parágrafo</i>!';

let tag = document.querySelector('p:nth-of-type(2)');
tag.style.backgroundColor = '#f79d84ff';
tag.style.textShadow = "1px 1px 2px black";
console.log(tag);