function verificar_num(){
    var n1 = document.querySelector("#n1").value
    var n2 = document.querySelector("#n2").value
    var n3 = document.querySelector("#n3").value
    var msg = document.querySelector("#msg")


    if (n1 == n2 && n2 == n3){
        msg.innerHTML = "Os valores digitados são iguais!"
        
    }else{
        var maior = Math.max(n1, n2, n3)
        var menor = Math.min(n1, n2, n3)

        msg.innerHTML = `\
        Maior valor: <strong>${maior}</strong>;\
        Menor valor: <strong>${menor}</strong>`
}   }