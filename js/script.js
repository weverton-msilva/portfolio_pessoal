// FUNÇÃO PARA ALTERAÇÃO DO TEMA ATUAL DA PÁGINA
function toggleTheme() {
    const html = document.documentElement;

    // Lógica presente
    if (html.getAttribute("data-theme") === "dark") {
        html.setAttribute("data-theme", "light");
    } else {
        html.setAttribute("data-theme", "dark");
    }
}


// FUNÇÃO PARA TROCA DE PALAVRA NA ABA DE APRESENTAÇÃO
const animated_cargo = document.querySelector('.animated-cargo');
const animated_palavras = ['Back-End', 'UX e UI', "de Design"];
let index = 0;

function trocarPalavra() {
    animated_cargo.textContent = animated_palavras[index];
    index = (index + 1) % animated_palavras.length;

} setInterval(trocarPalavra, 3000);

trocarPalavra();