var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var add = document.getElementById('add')
add.addEventListener('click', adicionar)


var cont = 1
var lista = []


function adicionar(){

    var form = document.getElementById('form')
    var input = form.children[2]
    var num = Number(input.value)

    if (!input.checkValidity()){ // adição inválida
        input.reportValidity()

    }else{ // adição válida

        cont++
        lista.push(num)

        form.children[0].innerHTML = `${cont}º número`
        input.id = `num${cont}`
        input.value = ''
    }

}

function analisar(){

    var menor = lista[0]; var posMenores = []
    var maior = lista[0]; var posMaiores = []

    // encontrando os maiores e menores valores
    for (let número of lista){

        menor = (número < menor)? número: menor
        maior = (número > maior)? número: maior
    }
    
    // pegando as posições dos maiores e menores números
    for (let pos in lista){
        pos = Number(pos)
        let número = lista[pos]

        if (número == menor){
            posMenores.push(pos + 1)

        }else if (número == maior){
            posMaiores.push(pos + 1)
        }

    }

    // ajeitando o txt de resultado
    var txt = document.getElementById('resultado')
    txt.innerHTML =`\
    Maior número: <b>${maior}</b> na posição <b>${posMaiores.join(' ')}</b> <br>
    Menor número: <b>${menor}</b> na posição <b>${posMenores.join(', ')}</b>` 
    

    // resetando o contador, lista e formulário
    cont = 1
    lista = []
    var form = document.getElementById('form')
    form.children[0].innerHTML = '1º número'
    form.children[2].id = 'num1'
    
    
    
}

