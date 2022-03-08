function tipo_atleta(){
    var ano = document.getElementById("nascimento").value.slice(0, 4)
    var resultado = document.getElementById("resultado")
    var msgIdade = document.getElementById("msgIdade")
    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - ano

    if (idade <= 9){
        resultado.innerHTML = 'MIRIM'

    }else if (idade <= 14){
        resultado.innerHTML = 'INFANTIL'  

    }else if (idade <= 19){
        resultado.innerHTML = 'JÚNIOR'
    }else if (idade <= 25){
        resultado.innerHTML = 'SÊNIOR'
    }else{
        resultado.innerHTML = 'MASTER'
    }
    msgIdade.innerHTML = `${idade} anos`

}