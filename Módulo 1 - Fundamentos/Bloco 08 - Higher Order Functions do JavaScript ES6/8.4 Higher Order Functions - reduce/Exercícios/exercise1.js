// 1 - Dada uma matriz, transforme em um array

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(entry) {
  const array = entry.reduce((acc, curr) => acc.concat(curr), []);
  
  return array;
}

console.log(flatten(arrays));
