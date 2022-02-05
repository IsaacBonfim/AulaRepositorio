const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [ novaSaudacao, saudar ] = saudacoes;

saudar(novaSaudacao);

// Produza o mesmo resultado acima, porém utilizando array destructuring