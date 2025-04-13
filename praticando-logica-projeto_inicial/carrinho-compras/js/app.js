

// adicionar produto ao carrinho 
function adicionar() {
// recuperar valores: nome do produto; quantidade; valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; // split puxa os caracters que desejamos puxar ([0]primeira opção string que vem antes da '-')
let valorUnitario = produto.split('R$')[1]; // slip puxa os caracteres que estão após o 'R$'
let quantidade = document.getElementById('quantidade');
let preco = quantidade.value * valorUnitario
// TESTE - verificar se as informações estão sendo puxadas corretamente
// alert(quantidade.value);
// alert(nomeProduto);
// alert(valorUnitario);
// alert(preco);

// calcular o preço de cada produto/subtotal

// adicionar no carrinho

// calcular o preço total da compra
}

//limpar produto do carrinho
function limpar() {

}