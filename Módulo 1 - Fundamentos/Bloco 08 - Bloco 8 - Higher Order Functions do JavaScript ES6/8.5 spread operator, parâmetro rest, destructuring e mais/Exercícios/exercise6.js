const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (obj) => {
  const [ model, maker, year ] = obj;

  return {
    model,
    maker,
    year,
  };
}

console.log(toObject(chiron));
