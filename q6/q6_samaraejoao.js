function solucao(vetor) {

    let resultado = [];

    for (let i = 0; i < vetor.length; i++) {

        let existe = false;

        for (let j = 0; j < resultado.length; j++) {
            if (vetor[i] == resultado[j]) {
                existe = true;
            }
        }

        if (existe == false) {
            resultado.push(vetor[i]);
        }
    }
    return resultado;
}