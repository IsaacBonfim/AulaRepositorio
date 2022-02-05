const Sorteio = (number, action) => {
  const result = Math.floor(Math.random() * 5) + 1;

  action(number, result);
}

const resultado = (x, y) => {
  if (x === y) {
    console.log('Parabéns você ganhou');
  } else {
    console.log(`O seu numero foi ${x} e o resultado foi ${y}, tente novamente`);
  } 
}

Sorteio(3, resultado);
