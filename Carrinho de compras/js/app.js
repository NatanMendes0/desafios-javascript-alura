// Adiciona um primeiro item para exemplo
incrementaCarrinho(document.querySelector('select'), document.querySelector('select').options[document.querySelector('select').selectedIndex].value, 2);

// Pegar valor da opção do formulario
function adicionar() {
    const itemSelecionado = document.querySelector('select');
    const precoItem = itemSelecionado.options[itemSelecionado.selectedIndex].value;
    const quantidade = document.getElementById('quantidade').value;
    incrementaCarrinho(itemSelecionado, precoItem, quantidade);
}

// Incrementar o carrinho
function incrementaCarrinho(itemSelecionado, precoItem, quantidade) {

    //verifica se a quantidade é válida
    if (quantidade == 0) {
        alert('Quantidade inválida');
        return;
    }

    //verifica se o item já existe no carrinho
    let itemExistente = false;
    let itens = document.querySelectorAll('.carrinho__produtos__produto');
    itens.forEach(item => {
        if (item.innerText.includes(itemSelecionado.options[itemSelecionado.selectedIndex].text)) {

            //incrementa a quantidade
            let quantidadeItem = item.querySelector('span');
            let quantidadeAtual = parseInt(quantidadeItem.innerText.split('x')[0]);
            quantidadeItem.innerText = `${quantidadeAtual + parseInt(quantidade)}x`;
            itemExistente = true;
            
            //adiciona o valor total
            adicionarValorTotal(parseFloat(precoItem) * parseInt(quantidade));

        }
    });

    if (itemExistente) {
        return;
    } else{
        //adiciona uma nova section
        let section = document.getElementById('lista-produtos');
        let sectionNova = document.createElement('section');
        sectionNova.setAttribute('class', 'carrinho__produtos__produto');
        section.appendChild(sectionNova);
    
        //adiciona a quantidade
        let quantidadeItem = document.createElement('span');
        quantidadeItem.setAttribute('class', 'texto-azul');
        quantidadeItem.innerText = `${quantidade}x`;
        sectionNova.appendChild(quantidadeItem);
    
        //adiciona o nome do item
        let nomeItem = document.createElement('span');
        nomeItem.innerText = ` ${itemSelecionado.options[itemSelecionado.selectedIndex].text}`;
        sectionNova.appendChild(nomeItem);
    
        //adiciona o valor total
        adicionarValorTotal(parseFloat(precoItem) * parseInt(quantidade));
    }

}

// Adiciona o valor total
function adicionarValorTotal(valor) {
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerText = parseFloat(valorTotal.innerText) + valor;
}

// Limpar o carrinho
function limpar() {
    let itens = document.querySelectorAll('.carrinho__produtos__produto');
    itens.forEach(item => {
        item.remove();
    });
    document.getElementById('valor-total').innerText = '0,00';
}