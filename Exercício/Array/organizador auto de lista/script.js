var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var add = document.getElementById('add')
add.addEventListener('click', adicionar)

// variáveis globais
var cont = 1
var lista = []
var listaOrd = []

function adicionar(){

    var form = document.getElementById('form')
    var input = form.children[2]
    var num = Number(input.value)

    if (!input.checkValidity()){ // adição inválida
        input.setCustomValidity('')
        input.reportValidity()

    }else{ // adição válida

        if (lista.includes(num)){ // sem repetição
            input.setCustomValidity(`Você já digitou ${num}`)
            input.reportValidity()

        }else{

            cont++
            ordenarArray(num, lista)
            // atualizando form
            form.children[0].innerHTML = `${cont}º número`
            input.id = `num${cont}`
            input.value = ''
        }
    
    }
}

function ordenarArray(valor, array){
    var tamanho = array.length
    var primeiro = array[0]
    var ultimo = array[tamanho - 1]

    if (tamanho == 0 || valor > ultimo){
        array.push(valor) // adiciona no final

    }else if (valor < primeiro){
        array.unshift(valor) // adiciona no começo

    }else{

        for (let pos in array){// posição personalizada
            
            if (array[pos] >= valor){
                array.splice(Number(pos), 0, valor)
                break
            }
        }

    }
      
}

function analisar(){

    // ajeitando o txt de resultado
    var txt = document.getElementById('resultado')
    txt.innerHTML =``
    
    for (var pos in lista){
        txt.innerHTML += `${Number(pos) + 1}ª posição: ${lista[pos]} <br>`
    }
    
    // resetando o contador, lista e formulário
    cont = 1
    lista = []
    var form = document.getElementById('form')
    form.children[0].innerHTML = '1º número'
    form.children[2].id = 'num1'
    
}

