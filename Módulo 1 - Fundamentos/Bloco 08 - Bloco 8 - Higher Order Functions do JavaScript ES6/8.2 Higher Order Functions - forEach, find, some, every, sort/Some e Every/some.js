const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) =>  arr.some((elem) => elem === name);
  //Adicione seu código aqui

console.log(hasName(names, 'Ana'));


// const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// const verifyFirstLetter = (names, letter) => names.some((name) => name[0] === letter);

// console.log(verifyFirstLetter(listNames, 'J')); // true
// console.log(verifyFirstLetter(listNames, 'x')); // false
