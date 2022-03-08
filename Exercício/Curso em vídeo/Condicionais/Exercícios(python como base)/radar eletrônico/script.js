function verificar_velocidade(){
    let velocidade = document.querySelector("#velocidade").value
    let msg = document.querySelector("#msg")
    console.log(velocidade)
    if (velocidade > 80){
        multa = ((velocidade-80) * 7).toFixed(2)
        msg.style.color = "red"
        msg.innerHTML = "Você ultrapassou o limite máximo e foi multado!<br>"
        msg.innerHTML += `<strong>Valor da multa: R$${multa}</strong>`
        
    }else{
        msg.style.color = "green"
        msg.innerHTML = "Você não foi multado! Dirija com cuidado"
    }

}