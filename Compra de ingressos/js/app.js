// Pegar valor da opção do formulario
function comprar() {
    const itemSelecionado = document.querySelector('select').value;
    const quantidade = document.getElementById('qtd').value;
    descontaIngresso(itemSelecionado, quantidade);
}

// Decrementar numero das pistas
function descontaIngresso(itemSelecionado, quantidade) {
    
    //obtem o valor das opções
    const valorPista = document.getElementById('qtd-pista').textContent;
    const valorCadeiraSuperior = document.getElementById('qtd-superior').textContent;
    const valorCadeiraInferior = document.getElementById('qtd-inferior').textContent;
    
    //verifica qual opção foi selecionada
    switch (itemSelecionado) {
        case 'pista':
            
            //verifica se o valor da pista é 0
            if (valorPista == 0) {
                alert('Ingressos esgotados');
                document.getElementById('qtd-pista').value = 0;
            }
            //verifica se a quantidade é maior que o valor da pista
            else if (quantidade > valorPista) {
                
                mensagemCompraMaxima(quantidade, valorPista);
                document.getElementById('qtd-pista').textContent = 0;
            }
            //caso contrário, decrementa o valor da pista
            else {
                document.getElementById('qtd-pista').textContent = valorPista - quantidade;
            }
            break;
            
            case 'superior':
                //verifica se o valor da cadeira superior é 0
                if (valorCadeiraSuperior == 0) {
                    alert('Ingressos esgotados');
                    document.getElementById('qtd-superior').value = 0;
                }
                //verifica se a quantidade é maior que o valor da cadeira superior
                else if (quantidade > valorCadeiraSuperior) {
                    mensagemCompraMaxima(quantidade, valorCadeiraSuperior);
                    document.getElementById('qtd-superior').textContent = 0;
                }
                //caso contrário, decrementa o valor da cadeira superior
                else {
                    document.getElementById('qtd-superior').textContent = valorCadeiraSuperior - quantidade;
                }
                break;
                
                case 'inferior':
                    //verifica se o valor da cadeira inferior é 0
                    if (valorCadeiraInferior == 0) {
                        alert('Ingressos esgotados');
                        document.getElementById('qtd-inferior').value = 0;
                    }
                    //verifica se a quantidade é maior que o valor da cadeira inferior
                    else if (quantidade > valorCadeiraInferior) {
                        mensagemCompraMaxima(quantidade, valorCadeiraInferior);
                document.getElementById('qtd-inferior').textContent = 0;
            }
            //caso contrário, decrementa o valor da cadeira inferior
            else {
                document.getElementById('qtd-inferior').textContent = valorCadeiraInferior - quantidade;
            }
            break;
        }
        
    }
    
    // Mensagem de compra máxima
    function mensagemCompraMaxima(quantidade, valor) {
        let quantidadeRestante = quantidade - valor;
        let checaPlural = quantidadeRestante > 1 ? 'ingressos' : 'ingresso';
        alert(`Quantidade máxima de ingressos atingida. Não foi possível comprar mais ${quantidadeRestante} ${checaPlural}.`);
    }