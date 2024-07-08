// alert('Boas vindas ao nosso site.');

// let nome = prompt('Digite o seu nome:');
// let idade = prompt('Digite sua idade:');
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// let mensagemDeErro = 'Erro! Preencha todos os campos.';
// alert(mensagemDeErro);

// if (idade >= 18) {
//     alert('Parabéns, você pode tirar a carteira de habilitação!');
// }

alert('Boas vindas ao jogo do número secreto.');

let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10.');


if (numeroSecreto == chute) {
    console.log('Parabéns, você acertou o número secreto ', numeroSecreto, '!');
}