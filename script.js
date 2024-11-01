function escolherOpcao(opcao) {
    switch (opcao) {
        case 1:
            alert("Opção 1 selecionada: Gerar chave pública");
            // colocar aqui para gerar chave pública
            break;
        case 2:
            alert("Opção 2 selecionada: Encriptar");
            // colocar aqui para encriptar
            break;
        case 3:
            alert("Opção 3 selecionada: Desencriptar");
            // colocar aqui para desencriptar
            break;
        default:
            alert("Opção inválida!");
    }
}

 // Função para abrir o modal
 function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Fecha o modal se o usuário clicar fora do conteúdo
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// modo noturno 

function noturnoModo(){

    document.body.style.background = "#011d40";
    document.querySelector(".contanier-login").style.background = "#1d1d1d";
    document.querySelector(".contanier-login").style.border = "#cccccc outset 2px";
    let paragrafo = document.querySelectorAll("p")

    for(let i = 0 ; i < paragrafo.length ; i++){
        paragrafo[i].style.color = '#6b6b6b';
    }

    document.querySelector("h1").style.color = '#ffffff';
    document.querySelector("h3").style.color = '#ffffff';
    document.querySelector("h2").style.color = '#e4dbfb';
    document.querySelector(".noturno").style.display = 'none';

    let alterarCorBotao = document.querySelectorAll('button')
    let alterarBotao = document.querySelectorAll('button')

    for(let x = 0 ; x < alterarCorBotao.length ; x++){

        alterarCorBotao[x].style.background = '#474747';

    }

    for(i = 0 ; i < alterarBotao.length ; i++){
        alterarBotao[i].style.border = "#cccccc groove 2px";

    }

}