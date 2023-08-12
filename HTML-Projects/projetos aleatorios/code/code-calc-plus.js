function calculo() {

    let n = document.getElementById("n1").value + "";
    let txt = document.getElementById("n2");
    n = n.trim();
    n = n.replace("x", "*");
    n = n.replace(":", "/");
    n = n.replace("x", "*");

    let equacao = n.split;
    let n1;
    let operacao;
    let n2;

    if (n.includes("(") || n.includes("[") || n.includes("{")) {

        

    } else {

        alert("else");
        console.log("teste");

        for (let i = 0; i = n.length - 4; i += 2) {

            equacao = n.split;
            n1 = parseInt(equacao[i]);
            operacao = parseInt(equacao[i+ 1]);
            n2 = parseInt(equacao[2]);

            operacao(operacao, n1, n2);

            n.slice(0, 2);
            //n.unshift(resultado);
            equacao = n.split;


        }

    }

    function operacao(operacao, n1, n2) {

        if (operacao == "+") {

            adição(n1, n2, txt);

        } else if (operacao == "-") {

            subtração(n1, n2, txt);

        } else if (operacao == "*") {

            multiplicação(n1, n2, txt);

        } else if (operacao == "/") {

            divisão(n1, n2, txt);

        } else if (operacao == "^") {

            exponencial(n1, n2, txt);

        } else {

            raiz(n1, n2, txt);

        }

    }

    function adição(n1, n2, txt) {

        txt.value = n1 + " + " + n2 + " = " + (n1 + n2) + "\n";

    }

    function subtração(n1, n2, txt) {

        txt.value = n1 + " - " + n2 + " = " + (n1 - n2) + "\n";

    }

    function multiplicação(n1, n2, txt) {

        txt.value = n1 + " * " + n2 + " = " + (n1 ** n2) + "\n";

    }

    function divisão(n1, n2, txt) {

        txt.value = n1 + " / " + n2 + " = " + (n1 / n2) + "\n";

    }

    function exponencial(n1, n2, txt) {

        txt.value = n1 + " ^ " + n2 + " = " + (n1 ** n2) + "\n";

    }

    function raiz(n1, n2, txt) {

        txt.value = n1 + " ~ " + n2 + " = " + (n1 ** (1 / n2)) + "\n";

    }

}