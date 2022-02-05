const oddsAndEvens = [13, 3, 48, 4, 10, 1, 7, 2, 0];

const sortOddsAndEvens = (array) => array.sort((a, b) => a - b);

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente !`);
// será necessário alterar essa linha 😉