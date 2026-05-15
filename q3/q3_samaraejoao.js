function executar() {
    const vetor = document.querySelector("#texto").value.split(",");

    let invertido = [];
    for (let i = vetor.length - 1; i >= 0; i--) {
        invertido.push(vetor[i]);
    }
    document.querySelector("#saida").innerHTML =
        invertido.join(", ");
}