//exercise.js

// * Dado o array abaixo devemos somar seus elementos e imprimí-los 
// * caso o resultado seja maior que 15, caso contrario uma mensagem 
// * deve ser exibida informando que o valor é inferior a 16. 

let fruits = [3, 4, 10, 1, 12];

// * Criamos uma variável para armazenar o valor somado dos elementos do array

let soma = 0;


// * Em seguida criamos um "for" para que possamos caminhar por todo o vetor

for (let i = 0; i < fruits.length; i += 1) {

  soma += fruits[i]; 
  
  // * Com esta sintaxe conseguimos somar o valor já existente na variável 
  // * ao valor presente no array no atual momento da rotação.

}

// * Após sairmos do laço de repetição, verificamos o valor da variável soma utilizando um "if"

if (soma > 15) {
  
  // * Conforme definido pelo exercício, devemos demontra o valor na tela  caso fosse maior que 15

  console.log("Valor obtido é " + soma); 

} else {

  // * Caso contrario deveríamos apenas informar que o valor é inferior a 16.

  console.log("Valor menor que 16");

}