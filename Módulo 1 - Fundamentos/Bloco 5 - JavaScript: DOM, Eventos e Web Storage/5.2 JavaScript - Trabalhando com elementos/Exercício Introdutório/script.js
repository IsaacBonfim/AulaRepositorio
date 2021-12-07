// // Acesse o elemento elementoOndeVoceEsta.
let ondeEstou = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEstou);

// // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
ondeEstou.parentElement.style.backgroundColor = '#947bd3ff';
console.log(ondeEstou.parentElement);

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
ondeEstou.firstElementChild.textContent = 'É o carro do Ovo passando na sua rua';
console.log(ondeEstou.firstElementChild);

// // Acesse o primeiroFilho a partir de pai.
console.log(ondeEstou.parentElement.firstElementChild);

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeEstou.previousElementSibling);

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(ondeEstou.nextSibling);

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeEstou.nextElementSibling);

// // Agora acesse o terceiroFilho a partir de pai.
console.log(ondeEstou.parentElement.lastElementChild.previousElementSibling);