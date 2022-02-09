function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}


function sortearNum(){
    let numEscolhido = document.getElementById("number")
    let msg = document.getElementById("msg")
    let numSorteado = randInt(0, 5)

    if (numEscolhido.value == numSorteado){
        msg.innerHTML = `O computador sorteou ${numSorteado} também. Você ganhou!`
        msg.style.color = "green"

    }else{
        msg.innerHTML = `O computador sorteou ${numSorteado}. Você perdeu!`
        msg.style.color = "red"
    }

}