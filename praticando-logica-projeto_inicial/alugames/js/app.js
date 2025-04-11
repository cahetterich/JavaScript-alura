
//contador de quantos jogos foram alugados
let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

//recuperando o game clicado - alterar cor do botão (alugar/devolver)
function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); // teste para aparecer o nome do jogo no alerta

    // alert(nomeJogo.textContent); // testando se as informações são puxadas

    //
    if (imagem.classList.contains('dashboard__item__img--rented')) {

    // Adiciona uma confirmação antes de devolver o jogo
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--; 
    }

    } else {        
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++;// conta os jogos alugados
    }

    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

// Essa palavra é um Palindromo? 

//chamando a função antes de declarar - FUNCTION EXPRESSION
// palindromo() // hoisting
 
// function palindromo () {
//     var palavra = "rever";
//     var separandoAsLetras = palavra.split(""); // console.log(separandoAsLetras);
//     var palavraInvertida = separandoAsLetras.reverse();
//     palavraInvertida = palavraInvertida. join("");
//         if (palavra == palavraInvertida) {
//             console.log(`A palavra ${palavra} é um palíndromo!`);                   
//         } else {
//             console.log(`A palavra ${palavra} não é um palíndromo!`); 
//         }
// }

//chamando a function dentro da const - FUNCTION DECLARATION 
 
const palindromo = function (palavra) {   
    var separandoAsLetras = palavra.split(""); // console.log(separandoAsLetras);
    var palavraInvertida = separandoAsLetras.reverse();
    palavraInvertida = palavraInvertida. join("");
        if (palavra == palavraInvertida) {
            console.log(`A palavra ${palavra} é um palíndromo!`);                   
        } else {
            console.log(`A palavra ${palavra} não é um palíndromo!`); 
        }
};

palindromo("radar");

// ordenando números em sequência: 

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

// Exemplo de uso:
ordenarNumeros(3, 1, 5); // Deve exibir "Números ordenados: 1, 3, 5"



// Function - Pet adotado: 

function calcularProbabilidadeAdocao() {
    let peso = document.getElementById('peso').value;
    let idade = document.getElementById('idade').value;

    let nota = 10;
 
    if (peso > 20) {
        nota = nota - 4;
    } else if (peso > 10) {
        nota - 2;
    }
    
    if (idade >= 14) {
        nota = nota - 4;
    } else if (idade >= 8) {
        nota = nota - 2;
    }

    return nota;
}
