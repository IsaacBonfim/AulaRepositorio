// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Laranja', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Leite em pó', 'Farinha Lactea'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];

  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));