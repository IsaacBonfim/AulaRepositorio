// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (string) => string.length >= 5;
  // Adicione seu código aqui:

const nomeDe5Letras = names.find(findNameWithFiveLetters);

console.log(nomeDe5Letras);
