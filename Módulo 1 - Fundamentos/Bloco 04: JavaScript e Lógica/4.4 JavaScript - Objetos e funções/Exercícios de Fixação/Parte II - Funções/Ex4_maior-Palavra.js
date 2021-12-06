function maiorPalavra(array) {

  let vetor = array;
  let palavra = vetor[0];

  for (let i = 1; i < vetor.length; i += 1) {

    if (palavra.length < vetor[i].length) {
  
      palavra = vetor[i];
  
    } 
  }

  return palavra;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorPalavra(nomes));