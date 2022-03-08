var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var add = document.getElementById('add')
add.addEventListener('click', adicionar)


var cont = 1
var lista = []


function adicionar(){

    var form = document.getElementById('form')
    var input = form.children[2]
    var valor = Number(input.value)

    if (!input.checkValidity()){
        input.reportValidity()

    }else{
        cont++
        lista.push(valor)

        form.children[0].innerHTML = `${cont}º número`
        form.children[1].innerHTML = `Digite o ${cont}º número`
        input.id = `num${cont}`
    }

}

function menorValor(array){
    var menor = array[0]
    for (let element of array){
        menor = (element < menor)? element: menor;
    }
    return menor
}

function maiorValor(array){
    var maior = array[0]
    for (let element of array){
        maior = (element > maior)? element: maior;
    }
    return maior
}

function numPares(array){
    var pares = []

    for (let element of array){

        if (element % 2 == 0){
            pares.push(element)
        }
    }
    return pares
}

function analisar(){
    // achando menor e maior valores
    var maior = maiorValor(lista)
    var menor = menorValor(lista)

    // pegando os index do maior e menor valor
    var posMaior = lista.indexOf(maior) + 1
    var posMenor = lista.indexOf(menor) + 1

    // pegando os pares
    var pares = numPares(lista)
    var numP = pares.length

    // pegando o txt
    var txt = document.getElementById('resultado')
    txt.innerHTML = `\
    Análisando... <br>
    Maior valor: <b> ${maior} (${posMaior}ºpos) </b> <br>
    Menor valor: <b> ${menor} (${posMenor}ºpos) </b> <br>
    Pares: <b> ${numP} pare(s), sendo ele(s) ${pares.join(', ')} </b>`
    
    // resetando os valores
    lista = []
    cont = 1
    var form = document.getElementById('form')
    form.children[0].innerHTML = '1º número'
    form.children[1].innerHTML = 'Digite o 1º número'
    form.children[2].id = 'num1'
    
}
