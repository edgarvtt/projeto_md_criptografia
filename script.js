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