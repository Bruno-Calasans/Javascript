function parImpar(){
    let num = Math.floor(document.querySelector("#num").value)
    let msg = document.querySelector("#msg")

    if(num % 2 == 0){
        var rst = 'PAR'

    }else{
        var rst = 'ÍMPAR'
    }

    msg.innerHTML = `O número ${num} é ${rst}`
}
