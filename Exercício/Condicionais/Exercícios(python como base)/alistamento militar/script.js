function verificar_situação(){
    var nome = document.querySelector("#nome").value
    var data = document.querySelector("#data").value
    var situação = document.querySelector("#situação")

    // Manipulando data
    var anoAtual = new Date().getFullYear()
    var anoNascimento = Number(data.slice(0, 4))
    var idade = anoAtual - anoNascimento

    // Analisando situação
    if (idade < 18){
        var anosRestantes = 18 - idade
        situação.innerHTML = `${nome}, você precisará se alistar daqui a ${anosRestantes} anos, em ${anoAtual + anosRestantes}.`

    }else if (idade == 18){
        situação.innerHTML = `${nome}, você deve se alistar imediatamente!`

    }else{
        var anosAtrasados = idade - 18
        situação.innerHTML = `${nome}, caso não tenha se alistado, você está atrasado ${anosAtrasados} anos e deveria ter se alistado em ${anoAtual - anosAtrasados}.`
    }
}