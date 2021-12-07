// * Acesse o elemento elementoOndeVoceEsta.

let ondeEstou = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEstou);

// * Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

ondeEstou.parentElement.style.backgroundColor = '#947bd3ff';
console.log(ondeEstou.parentElement);

// * Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

ondeEstou.firstElementChild.textContent = 'Rumo ao futuro como desenvolvedor';
console.log(ondeEstou.firstElementChild);

// * Acesse o primeiroFilho a partir de pai.

console.log(ondeEstou.parentElement.firstElementChild);

// * Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

console.log(ondeEstou.previousElementSibling);

// * Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

console.log(ondeEstou.nextSibling);

// * Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

console.log(ondeEstou.nextElementSibling);

// * Agora acesse o terceiroFilho a partir de pai.

console.log(ondeEstou.parentElement.lastElementChild.previousElementSibling);

// * Crie um irmão para elementoOndeVoceEsta.

let pai = document.querySelector('#pai');

let novoElemento = document.createElement('section');
novoElemento.id = 'novoElemento';

pai.appendChild(novoElemento);

// * Crie um filho para elementoOndeVoceEsta.

let novoFilho = document.createElement('section');
novoFilho.id = 'novoFilho';

ondeEstou.appendChild(novoFilho);

// * Crie um filho para primeiroFilhoDoFilho.

let novoNeto = document.createElement('section');
novoNeto.id = 'novoNeto';

ondeEstou.firstElementChild.appendChild(novoNeto);

// * A partir desse filho criado, acesse terceiroFilho.

console.log(ondeEstou.firstElementChild.firstElementChild.parentElement.parentElement.nextElementSibling);

/* 
* Remova todos os elementos filhos de paiDoPai 
* exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho. 
*/

let paiDeTodos = document.getElementById('pai');
let filhos = paiDeTodos.children;

for(let i = 4; filhos.length !== 1; i -= 1) {
  let elemento = filhos[i];

  if (elemento.id !== 'elementoOndeVoceEsta') {
    paiDeTodos.removeChild(elemento);
  } 
}

console.log(filhos);

filhosDoFilho = ondeEstou.children;

for(let i = 2; filhosDoFilho.length !== 1; i -= 1) {
  let elemento = filhosDoFilho[i];

  if (elemento.id !== 'primeiroFilhoDoFilho'){
    ondeEstou.removeChild(elemento);
  }
}

console.log(filhosDoFilho);