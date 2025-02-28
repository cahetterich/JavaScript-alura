// 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function exibirCalculoImc() {
//     let numero1 = prompt("Digite sua altura em metros:");
//     let numero2 = prompt("Digite seu peso em quilogramas:");
//     let resultado = parseInt(numero2) / (parseInt(numero1) * (numero1)); // peso divido pela altura

//     alert(`Sua altura é : ${numero1}, e seu peso: ${numero2}. Logo seu IMC é: ${resultado}.`);
// }


function calculaIMC(altura, peso){

    let imc = peso / (alturaMetros * alturaMetros);
  }


// 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro. 

// function exibirCalculoFator() {
//     let numero3 = prompt("Digite o número para parâmetro:");

//     let resultado2 = parseInt(numero3); // ( 4 * 3 * 2 * 1) = 24

//     alert(`O resultado do parâmetro ${numero3} é: ${resultado2}.`);
// }

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// let dolar = 4.80;

// function exibirCalculoDolar() {
//     let numero4 = prompt("Digite quantos reais você tem :");
    
//     let resultado3 = parseInt(numero4) / dolar; // peso divido pela altura

//     alert(`Você possui R$: ${numero4}, e 1 dolar vale R$4,80: Logo você possui: ${resultado3}.`);
// }

function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);


// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 3; // em metros
  let largura = 5; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);
  
//   5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

//   6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let numero = 7;
  mostrarTabuada(numero);