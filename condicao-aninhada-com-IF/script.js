let renda = Number(prompt("Digite sua renda: "));
// ! simbolo de negaçao
// isNaN: is not number (verificase NÃO é um número)
if(!isNaN(renda)){
    if (renda >= 3000) {
        let nomeLimpo = prompt("Nome limpo? sim ou nao");
        if (nomeLimpo === "sim") {
            alert("Fianceiro aprovado");
        } else {
            alert("Nome negativado");
        }
    } else {
        alert("Renda Insuficiente");
    }
}
