let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let i = 0; i < numbers.length; i += 1) {

  if (i === 0) {

    maior = numbers[i];

  } else if (maior < numbers[i]) {

    maior = numbers[i];

  }

}

console.log(maior);