function existe_triang(){
    var a = Number(document.querySelector("#lado1").value)
    var b = Number(document.querySelector("#lado2").value)
    var c = Number(document.querySelector("#lado3").value)
    var msg = document.querySelector("#msg")
    var tipo = document.querySelector("#tipo")

    // Verficando se quaiquer dois lados sãos maiores q um terceiro
    // Pode escolher uma condição dentre essas duas
    var cond1 = (a + b > c && a + c > b && b + c > a)
    tipo.innerHTML = 'teste'
   

    if (cond1){
        msg.style.color = "#00FF00"
        msg.innerHTML = "O triângulo existe!"

        // Classificando o triângulo
        if (a == b && b == c){
            tipo.innerHTML = 'EQUILÁTERO'

        }else if (a == b || a == c || b == c){
            tipo.innerHTML = 'ISÓSCELES'

        }else{
            tipo.innerHTML = 'ESCALENO'
        }

    }else{
        msg.style.color = "#FF0000"
        msg.innerHTML = "O triângulo não existe!"
        tipo.innerHTML = 'Nenhuma'
        
    }
}
