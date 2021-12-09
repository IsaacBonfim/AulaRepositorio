const body = document.getElementById('corpo');
const section = document.getElementById('bgTexto');

const fundoDaTela = document.getElementById('bg');
const fundoDoTexto = document.getElementById('corBgTexto');
const corDoTexto = document.getElementById('corDoTexto');
const tamanhoDaFonte = document.getElementById('tamanhoFonte');
const espacamento = document.getElementById('espacamento');
const letras = document.getElementById('fonte');

// ! As pessoas devem ter o poder de alterar:

// ^ Cor de fundo da tela;

function corDaTela(evento) {
  body.style.backgroundColor = evento.target.value;
}

fundoDaTela.addEventListener('change', corDaTela);

function corDoFundoDoTexto(evento) {
  section.style.backgroundColor = evento.target.value;
}

fundoDoTexto.addEventListener('change', corDoFundoDoTexto);

// ^ Cor do texto;

function corTexto(evento) {
  section.style.color = evento.target.value;
}

corDoTexto.addEventListener('change', corTexto);

// ^ Tamanho da fonte;

function tamanho(evento) {
  section.style.fontSize = evento.target.value + 'px';
}

tamanhoDaFonte.addEventListener('click', tamanho);

// ^  Espaçamento entre as linhas do texto;

function espacoLinhas(evento) {
  section.style.lineHeight = evento.target.value + 'px';
}

espacamento.addEventListener('click', espacoLinhas);

// ^  Tipo da fonte ( Font family ).

function tipoDaLetra(evento) {
  section.style.fontFamily = evento.target.value;
}

fonte.addEventListener('keyup', tipoDaLetra);

// * Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela.