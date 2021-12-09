const body = document.getElementById('corpo');
const section = document.getElementById('bgTexto');

const fundoDaTela = document.getElementById('bg');
const fundoDoTexto = document.getElementById('corBgTexto');
const corDoTexto = document.getElementById('corDoTexto');
const tamanhoDaFonte = document.getElementById('tamanhoFonte');
const espacamento = document.getElementById('espacamento');
const letras = document.getElementById('fonte');
const botao = document.getElementById('padrao');

// ! As pessoas devem ter o poder de alterar:

// ^ Cor de fundo da tela;

function corDaTela(evento) {
  body.style.backgroundColor = evento.target.value;

  localStorage.setItem('body.style.backgroundColor', evento.target.value); 
}

fundoDaTela.addEventListener('change', corDaTela);

function corDoFundoDoTexto(evento) {
  section.style.backgroundColor = evento.target.value;

  localStorage.setItem('section.style.backgroundColor', evento.target.value);
}

fundoDoTexto.addEventListener('change', corDoFundoDoTexto);

// ^ Cor do texto;

function corTexto(evento) {
  section.style.color = evento.target.value;

  localStorage.setItem('section.style.color', evento.target.value);
}

corDoTexto.addEventListener('change', corTexto);

// ^ Tamanho da fonte;

function tamanho(evento) {
  section.style.fontSize = evento.target.value + 'px';

  localStorage.setItem('section.style.fontSize', evento.target.value);
}

tamanhoDaFonte.addEventListener('click', tamanho);

// ^  Espaçamento entre as linhas do texto;

function espacoLinhas(evento) {
  section.style.lineHeight = evento.target.value + 'px';

  localStorage.setItem('section.style.lineHeight', evento.target.value);
}

espacamento.addEventListener('click', espacoLinhas);

// ^  Tipo da fonte ( Font family ).

function tipoDaLetra(evento) {
  section.style.fontFamily = evento.target.value;

  localStorage.setItem('section.style.fontFamily', evento.target.value);
}

fonte.addEventListener('keyup', tipoDaLetra);

// * Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.

function carregaDados() {
  //^ Carregando cor de Fundo da Tela
  if (localStorage.getItem('body.style.backgroundColor') !== null){
    body.style.backgroundColor = localStorage.getItem('body.style.backgroundColor');
  }
  //^ Carregando cor de Fundo do Texto
  if (localStorage.getItem('section.style.backgroundColor') !== null){
    section.style.backgroundColor = localStorage.getItem('section.style.backgroundColor');
  }
  //^ Carregando cor do Texto
  if (localStorage.getItem('section.style.color') !== null){
    section.style.color = localStorage.getItem('section.style.color');
  }
  //^ Carregando tamanho da Fonte
  if (localStorage.getItem('section.style.fontSize') !== null){
    section.style.fontSize = localStorage.getItem('section.style.fontSize') + 'px';
  }
  //^ Carregando Espaçamento das Linhas
  if (localStorage.getItem('section.style.lineHeight') !== null){
    section.style.lineHeight = localStorage.getItem('section.style.lineHeight') + 'px';
  }
  //^ Carregando Tipo da Fonte
  if (localStorage.getItem('section.style.fontFamily') !== null){
    section.style.fontFamily = localStorage.getItem('section.style.fontFamily')
  }
}

window.onload = carregaDados()

//^ Configuração do botão para recarregar as configurações padrão.

function limpaStorage(evento) {
  localStorage.clear();

  window.location.reload();
}

botao.addEventListener('click', limpaStorage);