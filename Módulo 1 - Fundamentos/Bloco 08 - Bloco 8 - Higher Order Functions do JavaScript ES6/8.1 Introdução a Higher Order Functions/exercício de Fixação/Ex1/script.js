const contratada = (string) => {
  const pessoaContratada = {
    nomeCompleto: string,
    email: `${string.toLowerCase().split(' ').join('_')}@trybe.com`
  };
  return pessoaContratada;
};

const newEmployees = (action) => {
  const employees = {
    id1: action('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: action('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: action('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(contratada));
