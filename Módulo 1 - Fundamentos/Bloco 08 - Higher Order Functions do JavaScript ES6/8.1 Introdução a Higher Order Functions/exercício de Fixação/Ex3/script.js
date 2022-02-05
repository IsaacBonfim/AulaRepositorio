const verificacao = (arrayA, arrayB, action) => action(arrayA, arrayB);

const checagem = (arrayA, arrayB) => {
  let resultado = 0;
  
  for (let i = 0; i < arrayA.length; i += 1) {
    if (arrayB[i] === arrayA[i]) {
      resultado += 1;
    } else if (arrayB[i] === 'N.A') {
      resultado += 0;
    } else {
      resultado -= 0.5;
    }
  }

  return resultado;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(verificacao(rightAnswers, studentAnswers, checagem));
