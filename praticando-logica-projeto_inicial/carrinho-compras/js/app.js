

// adicionar produto ao carrinho 
function adicionar() {
// recuperar valores: nome do produto; quantidade; valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; // split puxa os caracters que desejamos puxar ([0]primeira opção string que vem antes da '-')
let valorUnitario = produto.split('R$')[1]; // slip puxa os caracteres que estão após o 'R$'
let quantidade = document.getElementById('quantidade').value;

// calcular o preço de cada produto/subtotal
let preco = quantidade * valorUnitario;

// adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
// concatenar todos os itens no carrinho / section
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul"> R$${preco} </span></section>`;


// TESTES - verificar se as informações estão sendo puxadas corretamente
// alert(quantidade.value);
// alert(nomeProduto);
// alert(valorUnitario);
// alert(preco);


// calcular o preço total da compra
}

//limpar produto do carrinho
function limpar() {

}