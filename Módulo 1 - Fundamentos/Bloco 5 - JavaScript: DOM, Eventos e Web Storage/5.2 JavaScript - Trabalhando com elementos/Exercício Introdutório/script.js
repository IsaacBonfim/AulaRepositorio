// // Acesse o elemento elementoOndeVoceEsta.
// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// // Acesse o primeiroFilho a partir de pai.
// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
// // Agora acesse o terceiroFilho a partir de pai.

let ondeEstou = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEstou);

ondeEstou.parentElement.style.backgroundColor = '#947bd3ff';
console.log(ondeEstou.parentElement);

ondeEstou.firstElementChild.textContent = 'É o carro do Ovo passando na sua rua';
console.log(ondeEstou.firstElementChild);

console.log(ondeEstou.parentElement.firstElementChild);

console.log(ondeEstou.previousElementSibling);

console.log(ondeEstou.nextSibling);

console.log(ondeEstou.nextElementSibling);

console.log(ondeEstou.parentElement.lastElementChild.previousElementSibling);