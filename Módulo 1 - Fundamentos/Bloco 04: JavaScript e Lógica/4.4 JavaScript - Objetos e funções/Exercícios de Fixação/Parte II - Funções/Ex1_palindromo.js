function verificarPalindromo(palavra) {

  let aVerificar = palavra;
  let invertido = "";
  
  for (let i = aVerificar.length -1; i >= 0; i -= 1) {
    
    invertido = invertido + aVerificar[i];	
  
  }
  
  if (aVerificar === invertido) {

    return true;

  } else {

    return false;

  }
}

let palavra = "Tryber";

console.log(verificarPalindromo(palavra));