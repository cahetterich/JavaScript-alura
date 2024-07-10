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

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100.');
    //se
    if (numeroSecreto == chute) {
        break;       
    } else { 
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`); 
        } else {
            alert(`O número secreto é maior que ${chute}.`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }

}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);


// if (tentativas > 1) {
//     alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
// }
