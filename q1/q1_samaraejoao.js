function executar() {
    const vetor = [];

    let n = parseFloat(document.querySelector("#numero").value);
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            vetor.push("FizzBuzz");
        } else if (i % 3 === 0) {
            vetor.push("Fizz");
        } else if (i % 5 === 0) {
            vetor.push("Buzz");
        } else if (i % 7 === 0) {
            vetor.push("Boom");
        } else {
            vetor.push(i);
        }
    }
    document.querySelector("#saida").innerHTML = vetor.join(", ");
}