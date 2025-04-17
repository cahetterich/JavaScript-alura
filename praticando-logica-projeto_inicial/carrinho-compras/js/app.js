// calcular o preço total da compra
let totalGeral = 0;
// document.getElementById('lista-produtos').innerHTML = ' ';
// document.getElementById('valor-total').textContent = 'R$ 0';
//substitui as funções pela função limpar()
limpar();

// adicionar produto ao carrinho 
function adicionar() {
// recuperar valores: nome do produto; quantidade; valor
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; // split puxa os caracters que desejamos puxar ([0]primeira opção string que vem antes da '-')
let valorUnitario = parseFloat(produto.split('R$')[1]); // slip puxa os caracteres que estão após o 'R$'
let quantidade = document.getElementById('quantidade').value;




 // Verificar se o produto selecionado é válido
 if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
}

// Verificar se a quantidade inserida é válida
if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}



// calcular o preço de cada produto/subtotal
let preco = quantidade * valorUnitario;

// adicionar no carrinho
let carrinho = document.getElementById('lista-produtos');
// concatenar todos os itens no carrinho / section
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul"> R$${preco} </span></section>`;

// atualizar o valor total do carrinho 
totalGeral = totalGeral + preco;

let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$ ${totalGeral}`;

// zerar a quantidade de itens na opção de "Qtde."
document.getElementById('quantidade').value = 0;

// TESTES - verificar se as informações estão sendo puxadas corretamente
// alert(quantidade.value);
// alert(nomeProduto);
// alert(valorUnitario);
// alert(preco);


}

//limpar produto do carrinho
function limpar() {
// botão para limpar o carrinho
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = ' ';
document.getElementById('valor-total').textContent = 'R$ 0';

}


// Suponha que você está desenvolvendo um programa para calcular o custo total de uma viagem de carro com base em diferentes fatores. Você deseja que os usuários informem a distância da viagem (em quilômetros), a eficiência do carro (em quilômetros por litro), o preço da gasolina por litro e a velocidade média durante a viagem (em quilômetros por hora). Com essas informações, você calculará o custo total da viagem.

// Agora, você precisa criar uma função que recebe esses valores como entrada e retorna o custo total da viagem. Você escreveu o seguinte código para representar uma função que realiza o cálculo:

function calcularCustoViagem(distancia, eficiencia, precoGasolina, velocidadeMedia) {
    let tempoViagem = distancia / velocidadeMedia;
    let consumoCombustivel = distancia / eficiencia;
    let custoTotal = consumoCombustivel * precoGasolina;
    return custoTotal;
}