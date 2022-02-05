//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  const retorno = array.reduce((acc, curr) =>
  acc + curr.split('').reduce((acumulator, current) => {
     if (current === 'a' || current === 'A') return acumulator + 1;
     return acumulator;
  }, 0), 0);

  return retorno;
}

console.log(containsA(names));
