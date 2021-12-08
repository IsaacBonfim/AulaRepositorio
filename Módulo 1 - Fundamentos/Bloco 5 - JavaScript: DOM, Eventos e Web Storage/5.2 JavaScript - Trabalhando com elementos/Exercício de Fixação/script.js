// * Para uma melhor organização, faça commits a cada tarefa concluída.
// ^ Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let corpo = document.querySelector('body');

let titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';

corpo.appendChild(titulo);

// ^ Adicione a tag main com a classe main-content como filho da tag body;

let principal = document.createElement('main');
principal.className = 'main-content';

corpo.appendChild(principal);

// ^ Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let centro = document.createElement('section');
centro.className = 'center-content';

principal.appendChild(centro);

// ^ Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragrafo = document.createElement('p');
paragrafo.textContent = 'Praticando inserção de elementos no HTML pot meio do JavaScript com DOM.'

centro.appendChild(paragrafo);

// ^ Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let esquerda = document.createElement('section');
esquerda.className = 'left-content';

principal.appendChild(esquerda);

// ^ Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let direita = document.createElement('section');
direita.className = 'right-content';

principal.appendChild(direita);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
console.log(corpo);