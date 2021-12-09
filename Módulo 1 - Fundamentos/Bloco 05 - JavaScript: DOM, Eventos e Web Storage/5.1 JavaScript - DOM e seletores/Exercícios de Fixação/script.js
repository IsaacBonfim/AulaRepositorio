/*
* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()
*/
// // Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function future(string) {
  string = document.getElementsByTagName('p');
  
  string[1].textContent = 'Profissional qualificado de desenvolvimento web, trabalhando em uma empresa interessante.';

  return string[1];
}

let texto = '';
future(texto);

// // Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function green(string) {
  string = document.getElementsByClassName('main-content');

  string[0].style.backgroundColor = 'rgb(76,164,109)';

  return string;
}

let quadro = '';
green(quadro);

// //  Crie uma função que mude a cor do quadrado vermelho para branco.

function red(string) {
  string = document.getElementsByClassName('center-content');

  string[0].style.backgroundColor = 'white';

  return string;
}

let centro = '';
red(centro);

// //  Crie uma função que corrija o texto da tag <h1>.

function correcao(string) {
  string = document.getElementsByClassName('title');

  string[0].textContent = 'Exercício 5.1 - JavaScript';

  return string;
}

let titulo = '';
correcao(titulo);

// //  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function maiusculo(string) {
  string = document.getElementsByTagName('p');

  for (let i = 0; i < string.length; i += 1) {
    string[i].textContent = string[i].textContent.toUpperCase();
  }

  return string;
}

let paragrafo = '';
maiusculo(paragrafo);

// //  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function conteudo(string) {
  string = document.getElementsByTagName('p');

  for (let i = 0; i < string.length; i += 1) {
    console.log(string[i].textContent);
  }

  return string;
}

let lista = '';
conteudo(lista);