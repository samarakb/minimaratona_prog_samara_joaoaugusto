function executar() {
    const texto = document.querySelector("#texto").value;

    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    if (texto === invertido) {
        document.querySelector("#saida").innerHTML = "É um palíndromo";
    } else {
        document.querySelector("#saida").innerHTML = "Não é um palíndromo";
    }
}