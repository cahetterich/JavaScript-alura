// 1 -Criar uma função que exibe "Olá, mundo!" no console.

function olaMundo() {
    console.log("Olá, mundo!");
}
olaMundo();

// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome("Carla"); 

// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function funcaoNumero(numero) {
    return numero * 2;
}
let resultadoDobro = funcaoNumero(5);
console.log(resultadoDobro);

// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}
let media = calcularMedia( 4, 7, 10);           
console.log(media);

// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(a, b) {
      if (a > b) {
        return a;
      } else (a < b); {
        return b;
      }
}
console.log(maiorNumero(5, 10));

//ou 

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumeroDois = encontrarMaior(15, 20);
  console.log(maiorNumeroDois);

// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.  

function quadradoNumero(numero) {
    return numero * numero;
}

let resultadoQuadrado = quadradoNumero(2);
console.log(resultadoQuadrado);