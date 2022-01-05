// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function previnePadrao(evento){
  evento.preventDefault();
}

HREF_LINK.addEventListener("click", previnePadrao);
INPUT_CHECKBOX.addEventListener("click", previnePadrao);

function previneDigitacao(evento) {
  const x = evento.key;

  if (x !== 'a') {
    evento.preventDefault();
  }
}

INPUT_TEXT.addEventListener("keypress", previneDigitacao);