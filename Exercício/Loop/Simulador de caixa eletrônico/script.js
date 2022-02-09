var btnSaque = document.getElementById('btn_saque')
btnSaque.addEventListener('click', sacar)

function sacar(){
    var valor = Number(document.getElementById('valor').value)

    // Definindo variáveis
    var ced200 = 0; var ced100 = 0; 
    var ced50 = 0;  var ced10 = 0; var ced20 = 0 
    var ced5 = 0; var ced1 = 0
    var resto = 0

    // Pegando o elemento de texto
    var txt = document.getElementById('resultado')
    txt.innerHTML  =''

    // fazendo as divisões e pegando os restos
    ced200 =  Math.trunc(valor / 200) // divisão por 200
    resto = valor % 200 // resto da divisão por 200

    ced100 = Math.trunc(resto / 100) // divisão por 100
    resto %= 100 // resto da divisão por 100

    ced50 = Math.trunc(resto / 50) // divisão por 50
    resto %= 50 // resto da divisão por 50

    ced10 = Math.trunc(resto / 10) // divisão por 10
    resto %= 10 // resto da divisão por 10

    ced5 = Math.trunc(resto / 5) // divisão por 5
    resto %= 5 // resto da divisão por 5

    ced1 = Math.trunc(resto / 1) // divisão por 1
    resto %= 0 // resto da divisão por 1

    var lista = [ced200, ced100, ced50, ced20, ced10, ced5, ced1]
    var lista2 = ['200', '100', '50', '20', '10', '5', '1']

    // Alterando o elemento de  texto
    for (var cont = 0; cont < 7; cont++){
        if (lista[cont] != 0){
            txt.innerHTML += `\
            <b>Cédulas de R$${lista2[cont]}:</b> ${lista[cont]} <br>`
        }
    }
  
}
