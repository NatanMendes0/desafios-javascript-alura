/*
TODO:
- função de alterarStatus(id) para alterar o clase do botao
- botão tem que trocar de cor pela classe:
    - dashboard__item__button
    - dashboard__item__button--return
*/

function alterarStatus(id) {
    
    //pega o card do jogo e suas informações
    let game = document.getElementById(`game-${id}`);
    let button = game.querySelector('.dashboard__item__button');
    let image = game.querySelector('.dashboard__item__img');

    //verifica se o jogo está alugado
    if (button.classList.contains('dashboard__item__button--return')) {
        //marca como disponível para alugar
        button.classList.remove('dashboard__item__button--return');
        button.classList.add('dashboard__item__button');
        image.classList.remove('dashboard__item__img--rented');
        button.innerHTML = `Alugar`
    } else {
        //marca para devolver
        button.classList.add('dashboard__item__button');
        button.classList.add('dashboard__item__button--return');
        image.classList.add('dashboard__item__img--rented');
        button.innerHTML = `Devolver`
    }

}