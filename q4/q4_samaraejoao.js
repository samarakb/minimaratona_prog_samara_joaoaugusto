function executar() {
    const texto = document.querySelector("#texto").value.trim();

    if (texto === "") {
        document.querySelector("#saida").innerHTML = "Digite uma frase.";
        return;
    }

    let palavras = texto.split(" ");

    let total = palavras.length;
    let menor = palavras[0];
    let maior = palavras[0];

    for (let i = 1; i < palavras.length; i++) {
        if (palavras[i].length < menor.length) {
            menor = palavras[i];
        }
        if (palavras[i].length > maior.length) {
            maior = palavras[i];
        }
    }

    document.querySelector("#saida").innerHTML = "Total de palavras: " + total + "<br>" +
    "Mais curta: " + menor + "<br>" +
    "Mais longa: " + maior;
}