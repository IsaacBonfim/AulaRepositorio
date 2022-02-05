let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]; 
let menor = array[0];

for (let i = 1; i < array.length; i += 1) {

  if (maior.length < array[i].length) {

    maior = array[i];

  } else if (menor.length > array[i].length) {
    
    menor = array[i];

  }

}

console.log(maior + " é a maior palavra.");
console.log(menor + " é a menor palavra.")