let i = 1

function Click(){

    document.getElementById("cont").textContent = "Quantidade de Cliques: " + i
    i++

}

function MouseWheel(){

    i--
    document.getElementById("cont").textContent = "Quantidade de Cliques: " + i

}
