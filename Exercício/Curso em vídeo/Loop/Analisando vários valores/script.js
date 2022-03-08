var submit = document.getElementById('submit')
var finish = document.getElementById('finish')
var storage = 0
var cont = 0

submit.addEventListener('click', guardar)
finish.addEventListener('click', finalizar)

function guardar(){
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''
    var num = Number(document.getElementById('num').value)
    storage += num
    cont++
}

function finalizar(){
    var txt = document.getElementById('resultado')
    txt.innerHTML = `\
    Você digitou ${cont} números <br>
    A soma entre eles vale ${storage}`
    storage = 0
    cont = 0
}
