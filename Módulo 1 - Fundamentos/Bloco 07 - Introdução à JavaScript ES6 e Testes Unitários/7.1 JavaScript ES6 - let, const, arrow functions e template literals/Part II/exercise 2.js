const longestWord = (frase) => frase.split(' ').reduce((acc, palavra) => acc.length > palavra.length ? acc : palavra);

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu'

console.log(longestWord(frase)) // retorna 'aconteceu'
