function verficaFim(word, ending){

  let teste = word;
  let final = ending;
  let aux = "";
  let resultado = "";

  for (let i = teste.length - 1; i >= 0; i -= 1){

    aux = aux + teste[i];

  }

  for (let i = final.length - 1; i >= 0; i -= 1){

    resultado = resultado + aux[i];

  }

  if (resultado === final){

    return true;

  } else {

    return false;

  }
}

let palavra = "trybe";
let fim = "be";

console.log(verficaFim(palavra, fim));