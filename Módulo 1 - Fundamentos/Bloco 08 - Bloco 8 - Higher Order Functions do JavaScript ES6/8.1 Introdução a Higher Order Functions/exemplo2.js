const rolaUmDado = (number) => {
  const result = Math.floor(Math.random() * (number)) + 1;

  if (result === number) {
    console.log(`Wow! Parabéns ${result} é um critico natural!`);
  } else if (result === 1) {
    console.log(`Que pena, ${result} é uma falha crítica!`);
  } else {
    console.log(result);
  }
}

rolaUmDado(20);
