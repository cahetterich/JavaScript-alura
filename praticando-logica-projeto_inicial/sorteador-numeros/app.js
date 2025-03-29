//sorteador
function sortear(){
    // quantidade
    let quantidade = parseInt(document.getElementById('quantidade').value); 
    // de 
    let de = parseInt(document.getElementById('de').value);
    // ate
    let ate = parseInt(document.getElementById('ate').value); 
    
    // alert(`Quantidade: ${quantidade}`);
    // alert(`Do número: ${de}`);
    // alert(`Até o número: ${ate}`);

    // let numero = obterNumeroAleatorio(de, ate);
    // alert(numero);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
    
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    // alert(sorteados);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();

}

function obterNumeroAleatorio(min, max) {
    // min = Math.cell(min);
    // max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
     // quantidade
    document.getElementById('quantidade').value = ''; 
     // de 
    document.getElementById('de').value = ''; 
     // ate
     document.getElementById('ate').value = '';  
     document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';  
     alterarStatusBotao();     
}