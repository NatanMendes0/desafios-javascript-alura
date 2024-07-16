function sortear() {

    // Obtem os valores dos campos
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Verifica se a quantidade é um número
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    // Array para armazenar os números sorteados
    let numerosSorteados = [];

    // Sorteio dos números
    for (let i = 0; i < quantidade; i++) {

        // Sorteia um número
        let numeroSorteado = obterNumeroAleatorio(de, ate);

        // Verifica se o número já foi sorteado
        while (numerosSorteados.includes(numeroSorteado)) {
            numeroSorteado = obterNumeroAleatorio(de, ate);            
        }

        // Adiciona o número sorteado ao array
        numerosSorteados.push(numeroSorteado);
        console.log(numerosSorteados);
    }

    // Exibe o resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`

    // Alterar status do botão reiniciar
    alterarStatusBotaoReiniciar();

}

// Função para obter um número aleatório
function obterNumeroAleatorio(de, ate) {
    return Math.floor(Math.random() * (ate - de + 1)) + de;
}

// Função para reiniciar o sorteio
function alterarStatusBotaoReiniciar() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {

        // Habilita o botão
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {

        // Desabilita o botão
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar o sorteio
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotaoReiniciar();
}