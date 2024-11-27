// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de clique no botão
botao.addEventListener("mouseover", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    } else {
        // Troca a classe para "visivel"
        caixa.classList.replace("oculto", "visivel");
    }

});
botao.addEventListener("mouseout", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    } else {
        // Troca a classe para "visivel"
        caixa.classList.replace("oculto", "visivel");
        
    }
});

botao.addEventListener("mouseover", () => {
    caixa.classList.contains("oculto, visivel"))
}

    botao.addEventListener("mouseout", () => {
        caixa.classList.contains("visivel, oculto"))
    }
