function validar() {

    let senha = document.getElementById("senha").value;
    let tamanho = senha.length >= 8;
    let maiuscula = false;
    let numero = false;
    let especial = false;

    for (let i = 0; i < senha.length; i++) {
        let c = senha[i];

        if (c >= "A" && c <= "Z") {
            maiuscula = true;
        }
        if (c >= "0" && c <= "9") {
            numero = true;
        }
        if ("!@#$%".includes(c)) {
            especial = true;
        }
    }

    let resultado = "";

    resultado += (tamanho ? "✅" : "❌") + " Tamanho<br>";
    resultado += (maiuscula ? "✅" : "❌") + " Maiúscula<br>";
    resultado += (numero ? "✅" : "❌") + " Número<br>";
    resultado += (especial ? "✅" : "❌") + " Especial<br><br>";

    if (tamanho && maiuscula && numero && especial) {
        resultado += "<b>Senha válida</b>";
    } else {
        resultado += "<b>Senha inválida</b>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}