function addProperties (objeto, propriedade, valor) {

  objeto[propriedade] = valor;
  
  return objeto;
}

const pessoa = {
  nome: 'Isaac',
};

console.log(pessoa);

addProperties(pessoa, 'sobrenome', 'Oliveira');

console.log(pessoa);

addProperties(pessoa, 'nomeCompleto', `${pessoa.nome} ${pessoa.sobrenome}`);

console.log(pessoa);
