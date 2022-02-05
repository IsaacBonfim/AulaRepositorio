const verificaPreenchimento = (value1, value2) => {
  if (value1.trim() === '' || value2.trim() === '') {
    document.getElementById('result').innerHTML = `Preencha os dois valores`;
    throw new Error('Preencha os dois valores');
  }
}

const verificaSeENumero = (value1, value2) => {
  if (isNaN(value1) || isNaN(value2)) {
    document.getElementById('result').innerHTML = `Ambos os valores devem ser numéricos`;
    throw new Error('Ambos os valores devem ser numéricos');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    
    verificaPreenchimento(value1, value2);
    verificaSeENumero(value1,value2);
    
    document.getElementById('result').innerHTML = `Resultado: ${result}`;  
  } catch (error) {
    throw error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');

  button.addEventListener('click', sum);
}