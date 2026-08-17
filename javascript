// LEITOR DE TEXTO
function lerSecao(botao) {
    speechSynthesis.cancel();

    const secao = botao.closest("section, article");

    if (!secao) {
        return;
    }

    let texto = secao.innerText;
    texto = texto.replace(/🔊 Ouvir.*$/gm, "");

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    fala.rate = 0.9;
    fala.pitch = 1;

    speechSynthesis.speak(fala);
}

// PARAR LEITURA
function pararLeitura() {
    speechSynthesis.cancel();
}

// AUMENTAR FONTE
function aumentarFonte() {
    document.body.classList.remove("fonte-pequena");
    document.body.classList.add("fonte-grande");
}

// DIMINUIR FONTE
function diminuirFonte() {
    document.body.classList.remove("fonte-grande");
    document.body.classList.add("fonte-pequena");
}

// TAMANHO NORMAL
function tamanhoNormal() {
    document.body.classList.remove("fonte-grande");
    document.body.classList.remove("fonte-pequena");
}

// ALTO CONTRASTE
function altoContraste() {
    document.body.classList.toggle("alto-contraste");

    if (document.body.classList.contains("alto-contraste")) {
        document.body.classList.remove("modo-escuro");
    }
}

// MODO ESCURO
function modoEscuro() {
    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {
        document.body.classList.remove("alto-contraste");
    }
}

// QUIZ
function responderQuiz(correta) {
    const resultado = document.getElementById("resultadoQuiz");

    resultado.classList.remove("correto", "incorreto");

    if (correta) {
        resultado.textContent = "🎉 Muito bem! A resposta correta é REFRAÇÃO.";
        resultado.classList.add("correto");
    } else {
        resultado.textContent = "❌ Não foi dessa vez! Tente novamente.";
        resultado.classList.add("incorreto");
    }
}

// TECLADO (Atalho ESC para parar leitura)
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        pararLeitura();
    }
});