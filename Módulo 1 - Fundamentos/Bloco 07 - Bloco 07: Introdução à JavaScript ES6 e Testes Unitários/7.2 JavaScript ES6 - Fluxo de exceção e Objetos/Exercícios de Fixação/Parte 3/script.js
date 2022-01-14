const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Tarefa 1
const addturno = (objeto, chave, valor) => objeto[`${chave}`] = valor;

addturno(lesson2, 'turno', 'noite');

console.log(lesson2);

// Tarefa 2
const listaChaves = (objeto) => Object.keys(objeto);

console.log(listaChaves(lesson2));

// Tarefa 3
const tamanhoObj = (objeto) => Object.keys(objeto).length;

console.log(tamanhoObj(lesson2));

// Tarefa 4
const listaValores = (objeto) => Object.values(objeto);

console.log(listaValores(lesson2));

// Tarefa 5
const allLessons = Object.assign({},{lesson1},{lesson2},{lesson3});

console.log(allLessons);

// Tarefa 6
const totalAlunos = (objeto) => objeto['lesson1']['numeroEstudantes'] + objeto['lesson2']['numeroEstudantes'] + objeto['lesson1']['numeroEstudantes'];

console.log(totalAlunos(allLessons));

// Tarefa 7
const pegaValor = (objeto, num) => {
  const entradas = Object.values(objeto);
  return entradas[`${num}`];
}

console.log(pegaValor(lesson1, 0));

// Tarefa 8
const verificaChave = (objeto, chave, valor) => {
  if (objeto[chave] === valor) {
    console.log(`A chave '${chave}' com o valor '${valor}', existe neste objeto!`);
  } else {
    console.log(`A chave '${chave}' com o valor '${valor}', não existe neste objeto!`);
  }
}

verificaChave(lesson3, 'turno', 'manhã');
