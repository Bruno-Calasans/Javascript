function existe_triang(){
    var a = Number(document.querySelector("#lado1").value)
    var b = Number(document.querySelector("#lado2").value)
    var c = Number(document.querySelector("#lado3").value)
    var msg = document.querySelector("#msg")

    // Verficando se quaiquer dois lados sãos maiores q um terceiro

    // Pode escolher uma condição dentre essas duas
    var cond1 = (a + b > c && a + c > b && b + c > a)
    var cond2 = (Math.abs(a-b)<c && Math.abs(a-c)<b && Math.abs(b-c)<a)

    if (cond1){
        msg.innerHTML = "O triângulo existe!"
    }else{
        msg.innerHTML = "O triângulo não existe!"
    }
}
