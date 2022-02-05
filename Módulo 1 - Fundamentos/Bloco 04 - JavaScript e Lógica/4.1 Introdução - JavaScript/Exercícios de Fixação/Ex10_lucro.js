const custo = 100;
const valor = 150;
let custoTotal = custo + ((custo*20)/100);

if (custo >= 0 && valor >= 0) {
  console.log((valor - custoTotal)*1000);
} else {
  console.log("Valor inválido");
}