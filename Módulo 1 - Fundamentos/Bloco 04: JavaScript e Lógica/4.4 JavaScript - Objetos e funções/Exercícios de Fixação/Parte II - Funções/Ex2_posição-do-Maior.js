function posicaoDoMaior(array) {

  let numeros = array;
  let x = numeros[0];
  let posicao = null;

  for (let i = 1; i < numeros.length; i += 1) {

    if (x < numeros[i]){

      x = numeros[i];
      posicao = i;

    }
  }

  return posicao;
}

let num = [2, 3, 6, 7, 10, 1];

console.log(posicaoDoMaior(num));