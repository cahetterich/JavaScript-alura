

//recuperando o game clicado - alterar cor do botão (alugar/devolver)
function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    // let nomeJogo = gameClicado.querySelector('.dashboard__item__name'); // teste para aparecer o nome do jogo no alerta

    // alert(nomeJogo.textContent); // testando se as informações são puxadas

    //
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    } else {        
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

}