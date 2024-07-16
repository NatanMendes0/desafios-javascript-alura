/*
TODO:
- função de alterarStatus(numeroBotao) para alterar o clase do botao
- botão tem que trocar de cor pela classe:
    - dashboard__item__button
    - dashboard__item__button--return
*/

function alterarStatus(numeroBotao) {
    //recebe o cartão clicado
    let cartao = document.getElementById(`game-${numeroBotao}`);
    
    //acessa o botão do cartão
    let botao = cartao.querySelector('.dashboard__item__button');
    console.log("cartao", cartao);
    console.log("botao", botao);

    //acessa o texto do botao

    //verifica se o botão está desabilitado
    if (botao.classList.contains('dashboard__item__button--return')) {
        //habilita o botão
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
        botao.innerHTML = `Alugar`
    } else {
        //marca como indisponível
        botao.classList.add('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = `Devolver`
    }

}