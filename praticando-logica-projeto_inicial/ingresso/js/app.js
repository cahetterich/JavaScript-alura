function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value); //parseInt - converte o texto em número - value para formulário

    // alert(tipo.value);
    // alert(qtd.value);

    //condicional
    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

// PISTA
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent); //parseInt - converte o texto em número - textContent para texto
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para Pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    }
}

// SUPERIOR
function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent); //parseInt - converte o texto em número - textContent para texto
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para Superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    }
}

// INFERIOR
function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent); //parseInt - converte o texto em número - textContent para texto
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para Inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    }
}

