const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const atualizaProdutos = (produtos, precos) => {
  return produtos.map((produto, i) => ({[produto]: precos[i]}));
};    

const listaProdutos = atualizaProdutos(products, prices);

console.log(listaProdutos);

// const listProducts = [{ Arroz: 2.99 },...]
