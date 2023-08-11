function saida() {

    let notas = new Array();
    let media = 0;
    let quant = 0;
    let saida = "";

    for (let index = 0; index < 5; index++) {

        notas[index] = parseFloat(prompt("Informe a nota do " + (index + 1) + "º aluno: "));
        media += notas[index];

    }

    media = media / notas.length;

    for (let index = 0; index < notas.length; index++) {

        if (notas[index] > media) {

            quant++;

        }

    }

    for (let index = 0; index < notas.length; index++) {

        saida += "A nota do " + (index + 1) + "º aluno é " + notas[index] + "<br>";

    }

    document.write(saida + "<br>Houve " + quant + " alunos com nota acima da média");

}