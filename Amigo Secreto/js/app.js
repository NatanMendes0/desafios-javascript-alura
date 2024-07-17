/** TODO
 * - Criar função que zera os participantes
 */

// Array com os nomes dos participantes
var participantes = [];

function adicionar() {
    var nome = document.getElementById('nome-amigo').value;
    participantes.push(nome);
    document.getElementById('nome-amigo').value = '';
    console.log(participantes);
    exibirParticipantes();
}

// Função que exibe os amigos secretos no "Amigos incluídos"
function exibirParticipantes() {
    var lista = document.getElementById('lista-amigos');
    var checaVirgula;
    lista.innerHTML = '';

    //exibe os participantes
    for (var i = 0; i < participantes.length; i++) {
        checaVirgula = i < participantes.length - 1 ? ', ' : '.';
        lista.innerHTML += participantes[i] + checaVirgula;
    }
}

// Função que sorteia os amigos secretos
function sortear() {

    //verifica se o array de participantes está vazio ou contém apenas um participante
    if (participantes.length === 0) {
        alert('Adicione participantes antes de sortear!');
        return;
    } else if (participantes.length === 1) {
        alert('Adicione mais participantes antes de sortear!');
        return;
    }

    var amigosSecretos = [];

    //copia do array de participantes
    var participantesCopia = participantes.slice();

    //sorteio
    for (var i = 0; i < participantes.length; i++) {
        //sorteia um amigo secreto com base na cópia do array de participantes
        var amigo = participantesCopia[Math.floor(Math.random() * participantesCopia.length)];
        
        //verifica se o amigo secreto sorteado é o próprio participante
        if (amigo === participantes[i]) {
            //se contiver, sorteia novamente
            while (amigo === participantes[i]) {
                amigo = participantesCopia[Math.floor(Math.random() * participantesCopia.length)];
            }
        }

        //adiciona o amigo secreto no array de amigos secretos e remove o amigo secreto sorteado da cópia do array de participantes
        amigosSecretos.push(amigo);
        participantesCopia.splice(participantesCopia.indexOf(amigo), 1);
    }

    exibirSorteio(amigosSecretos);
}

// Função que exibe os amigos secretos no "Sorteio"
function exibirSorteio(amigosSecretos) {
    var lista = document.getElementById('lista-sorteio');
    lista.innerHTML = '';

    //exibe os amigos secretos
    for (var i = 0; i < amigosSecretos.length; i++) {
        lista.innerHTML += amigosSecretos[i] + ' --> ' + participantes[i] + '.<br>';
    }
}

// Função que zera os participantes
function reiniciar() {
    participantes = [];
    exibirParticipantes();
    document.getElementById('lista-sorteio').innerHTML = '';
}