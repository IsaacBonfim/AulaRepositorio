// Agora vamos criar um novo array de objetos a partir das informações abaixo, 
// onde cada objeto terá o formato { name: nome do aluno, average: media das notas }

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
  const nameAndAverage = alunos.map((student, index) => ({
    name: student,
    average: (notas[index].reduce((acc, curr) => acc + curr, 0) / notas[index].length),
  }));
  return nameAndAverage;
}

console.log(studentAverage(students, grades));
