function estiloNeon() {
    const titulo = document.getElementById("frase-motivadora");
   
    titulo.classList.remove("outline-text", "retro-shadow");
    titulo.classList.add("neon-text");
}

function estiloOutline() {
    const titulo = document.getElementById("frase-motivadora");

    titulo.classList.remove("neon-text", "retro-shadow");
    titulo.classList.add("outline-text");
}

function estiloRetro() {
    const titulo = document.getElementById("frase-motivadora");

    titulo.classList.remove("neon-text", "outline-text");
    titulo.classList.add("retro-shadow");
}