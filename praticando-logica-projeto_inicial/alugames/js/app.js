

//recuperando o game clicado - alterar cor do botão (alugar/devolver)
function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);

    // if (botao.classList.contains('.dashboard__item__button--return')) {
    //     botao.classList.remove('.dashboard__item__button--return');
    //     botao.classList.add('dashboard__item__button ');

    // } else {
    //     botao.classList.remove('dashboard__item__button ');
    //     botao.classList.add('.dashboard__item__button--return');
    // }

}