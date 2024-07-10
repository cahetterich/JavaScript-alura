// 1 -Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaSemana = prompt("Qual o dia da semana?").toLowerCase();
console.log(diaSemana);

if (diaSemana == 'sábado'|| diaSemana == 'domingo') {
    console.log("Bom fim de semana!");
} else {
    console.log("Boa semana!");
}

//resposta

// diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Boa semana!');
// }


// 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// let numero = prompt("Digite um número");
// console.log(numero);

if (numero > 0) {
    console.log(`O número ${numero} é positivo`);    
    alert(`O número ${numero} é positivo`);
} else {
    console.log(`O número ${numero} é negativo`);
    alert(`O número ${numero} é negativo`);
}

//resposta

// numero = prompt('Digite um positivo ou negativo');
// if (numero > 0) {
//     alert('Número positivo!');
// } else {
//     alert('Número negativo!');
// }

// 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

//resposta

pontuacao = 105;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

// 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// resposta

let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);

// 5 - Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt('Qual o seu nome?');
alert(`Boas vindas ${nome}`);