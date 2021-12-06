function maisSeRepete(array) {

  let vetor = array;
  let num = vetor[0];
  let reptAtual = 0;
  let reptAnterior = 0;

  for (let i = 0; i < vetor.length; i += 1) {

    for (let j = 0; j < vetor.length; j += 1) {

      if (vetor[i] === vetor[j]) {

        reptAtual += 1;

      }
    }

    if (reptAtual > reptAnterior) {

      reptAnterior = reptAtual;
      num = vetor[i];
      
    }

    reptAtual = 0;
  }

  return num;
}

let numeros = [2, 3, 2, 5, 8, 2, 3];

console.log(maisSeRepete(numeros));