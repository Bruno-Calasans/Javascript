var submit = document.getElementById('submit')
submit.addEventListener('click', analisar)

var add = document.getElementById('add')
add.addEventListener('click', adicionar)


var cont = 1
var lista = []


function adicionar(){

    var form = document.getElementById('form')
    var input = form.children[2]
    var palavra = input.value

    if (!input.checkValidity()){
        input.reportValidity()

    }else{
        cont++
        lista.push(palavra.toLowerCase().trim())

        form.children[0].innerHTML = `${cont}ª palavra`
        input.id = `p${cont}`
        input.value = ''
    }

}


function analisar(){

    var txt = document.getElementById('resultado')
    txt.innerHTML = ''
    var vogais = ['a', 'e', 'i', 'o', 'u']

    
    for (var palavra of lista){ // interando sobre cada palavra do array

        console.log(palavra)

        var tem = [] // lista de vogais que cada palavra tem

        for (var letra of palavra){ // iterando sobre cada letra de palavra

            for (let vogal of vogais){ // iterando sobre cada vogal de vogais

                if (letra == vogal){
                    tem.push(vogal)
                }
            }
    
        }
        // ajeitando o txt de resultado
        txt.innerHTML += `\
        A palavra <b>${palavra}</b> tem as vogais: <b>${tem.join(' ')}</b> <br>`

        // resetando o contador, lista e formulário
        cont = 1
        lista = []
        var form = document.getElementById('form')
        form.children[0].innerHTML = '1ª palavra'
        form.children[2].id = 'p1'
    


    }
    
}
