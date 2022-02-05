let palavra = "Tryber";
let invertido = "";

for (let i = palavra.length -1; i >= 0; i -= 1) {
  
  invertido = invertido + palavra[i];	

}

console.log(invertido.toLowerCase());