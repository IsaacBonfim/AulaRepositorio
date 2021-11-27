let peca = "torre";


switch (peca.toLowerCase()) {
  case "peão":
    console.log (peca + ' desloca 1 casa somente para frente, captura 1 casa na diagonal');
    break;
  case 'torre':
    console.log (peca + ' desloca quantas casas quiser na horizontal ou vertical');
    break;
  case 'cavalo':
    console.log (peca + ' desloca em "L" 2 casas na vertical e 1 na horizontal ou 2 na horizontal e 1 na vertical');
    break;
  case 'bispo':
    console.log (peca + ' desloca quantas casas quiser na diagonal');
    break;
  case 'rainha':
    console.log (peca + ' desloca quantas casas quiser em qualquer direção');
    break;
  case 'rei':
    console.log (peca + ' desloca 1 casa em qualquer direção');
    break;
  default:
    console.log (peca + ' não é uma peça válida');
}