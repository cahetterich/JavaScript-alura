function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value); //parseInt - converte o texto em número - value para formulário

    // alert(tipo.value);
    // alert(qtd.value);

    //condicional
    if(tipo.value == 'pista') {
        comprarPista(qtd);
    }
}

//PISTA
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