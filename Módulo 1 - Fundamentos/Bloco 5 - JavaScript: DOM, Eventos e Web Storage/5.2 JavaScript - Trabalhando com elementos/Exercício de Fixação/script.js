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

// ^ Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let imagem = document.createElement('img');
imagem.className = 'small-image';
imagem.src = 'https://picsum.photos/200';

esquerda.appendChild(imagem);

// ^ Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let lista = document.createElement('ul');

direita.appendChild(lista);

let valores = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0; i < valores.length; i += 1) {
  let valor = valores[i];
  
  let itens = document.createElement('li');
  itens.textContent = valor;

  lista.appendChild(itens);
}

// ^ Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

for (let i = 0; i < 3; i += 1) {
  let subtitulo = document.createElement('h3');
  
  principal.appendChild(subtitulo);
}

// ^ Adicione a classe title na tag h1 criada;

titulo.className = 'title';

// ^ Adicione a classe description nas 3 tags h3 criadas;

let subtitulos = document.querySelectorAll('h3');

for (let i = 0; i < subtitulos.length; i += 1) {
  let subtitulo = subtitulos[i];

  subtitulo.className = 'description';
}

// ^ Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();

principal.removeChild(esquerda);

// ^ Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

direita.style.marginRight = 'auto';

// ^ Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

centro.style.backgroundColor = 'green';

// ^ Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

let elementos = document.querySelectorAll('li');

for (let i = 0; i < elementos.length; i += 1) {
  let elemento = elementos[i];

  if (elemento.innerText.includes('nove') || elemento.innerText.includes('dez')) {
    lista.removeChild(elemento);
  }
}