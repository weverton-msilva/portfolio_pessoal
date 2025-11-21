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