const formulario = document.getElementById('formulario');
const dataCompleta = document.getElementById('dataInicio');
const selector = document.getElementById('estado');
const envio = document.getElementById('envio');
const inputs = document.querySelectorAll('input');
const resumo = document.getElementById('resumo');

const estados = [['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'], ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'], ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'], ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'], ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'], ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'], ['SE', 'Sergipe'], ['TO', 'Tocantins']]

function adicionaEstados() {
  for (let i = 0; i < estados.length; i += 1) {
    const opcoes = document.createElement('option');

    opcoes.value = estados[i][0];
    opcoes.innerText = estados[i][1];

    selector.appendChild(opcoes);
  }
}

window.onload = adicionaEstados();

function validaData() {
  const data = dataCompleta.value.split('/');
  const dia = parseInt(data[0], 10);
  const mes = parseInt(data[1], 10);
  const ano = parseInt(data[2], 10);
  
  if (dia <= 0 || dia > 31) {
    window.alert(`Dia inválido!
      \nO dia informado de ser maior que 0 e menor que 31
      \nUtilize o formato de data dd/mm/aaaa`);
  }
  if (mes <= 0 || mes > 12) {
    window.alert(`Mês inválido! 
      \nO mês informado de ser maior que 0 e menor que 12
      \nUtilize o formato de data dd/mm/aaaa`);
  } 
  if (ano <= 0 || ano > 2022) {
    window.alert(`Ano inválido!
      \nO ano informado de ser maior que 0 e menor ou igual ao ano atual
      \nUtilize o formato de data dd/mm/aaaa`);
  }
}

function montaRetorno() {
  let string = '';
  let aux = '';

  for (let i = 0; i < inputs.length; i += 1) {
    string += `\n${inputs[i].id}: ${inputs[i].value};`;
  }

  aux = string;

  string = `As informações fornecidas foram: ${aux} \n${resumo.value}`;

  return string;
}

function enviar(evento) {
  evento.preventDefault();

  const retorno = document.createElement('div');
  const invalidos = document.createElement('div');

  let itensInvalidos = '';
  
  for (let i = 0; i < inputs.length; i += 1) {
    if (inputs[i].value.trim() === '') {
      window.alert(`Por favor preencha o campo ${inputs[i].id}`);
      itensInvalidos += `\n ${inputs[i].id}: vazio;`
    }
  }
  
  if (resumo.value.trim() === '') {
    window.alert(`Por favor preencha o campo Resumo Curricular`);
    itensInvalidos += `\n ${resumo.id}: vazio;`
  }

  validaData();

  retorno.innerText = '';
  retorno.innerText = montaRetorno();
  invalidos.innerText = '';
  invalidos.innerText = `\nOs seguintes campos devem ser revisados: ${itensInvalidos}`;

  formulario.appendChild(retorno);
  formulario.appendChild(invalidos);
}

envio.addEventListener ('click', enviar);
