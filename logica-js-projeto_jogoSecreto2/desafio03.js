// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function exibirCalculoImc() {
    let numero1 = prompt("Digite sua altura em metros:");
    let numero2 = prompt("Digite seu peso em quilogramas:");
    let resultado = parseInt(numero2) / (parseInt(numero1) * (numero1)); // peso divido pela altura

    alert(`Sua altura é : ${numero1}, e seu peso: ${numero2}. Logo seu IMC é: ${resultado}.`);
}


// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro. 

function exibirCalculoFator() {
    let numero3 = prompt("Digite o número para parâmetro:");

    let resultado2 = parseInt(numero3); // ( 4 * 3 * 2 * 1) = 24

    alert(`O resultado do parâmetro ${numero3} é: ${resultado2}.`);
}

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let dolar = 4.80;

function exibirCalculoDolar() {
    let numero4 = prompt("Digite quantos reais você tem :");
    
    let resultado3 = parseInt(numero4) / dolar; // peso divido pela altura

    alert(`Você possui R$: ${numero4}, e 1 dolar vale R$4,80: Logo você possui: ${resultado3}.`);
}

// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.