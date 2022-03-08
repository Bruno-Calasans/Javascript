var criar = document.getElementById('create')
criar.addEventListener('click', criarLista)

var add = document.getElementById('add')
add.addEventListener('click', adicionarProduto)

var listaProdutos = []
var cont = 1
var ref = 'total'.length // maior palavra do array

function adicionarProduto(){
    
    var produto = document.getElementById(`produto${cont}`)
    var preço = document.getElementById(`preço${cont}`)

    if (! produto.checkValidity()){
        produto.reportValidity()

    }else if (! preço.checkValidity()){
        preço.reportValidity()

    }else{

        var tit = document.getElementById('título')

        // jogando os valores no array
        listaProdutos.push(produto.value, Number(preço.value))
        cont++

        // atualizando os valores
        tit.innerHTML = `Cadastro do ${cont}º produto`
        produto.id = `produto${cont}`
        preço.id = `preço${cont}`

        // limpando os valores
        produto.value = ''
        preço.value = ''
    }


}

function padding(p1, tamanho){

    // pegando o comprimento da maior palavra do array
    for (let elemento of listaProdutos){
        
        if (isNaN(elemento) && elemento.length > ref){
            ref = elemento.length
        }
    }

    var comprP1 = p1.length
    var comprExtra = ref - comprP1
   
    var separador = '.'.repeat(tamanho + comprExtra)
    return separador
    
}

function criarLista(){

    // ajeitando o elemento select
    var metade = listaProdutos.length/2
    var selection = document.getElementById('lista')
    selection.innerHTML = ''
    selection.size = `${metade + 1}`
    selection.style.display = 'initial'

    // calculando o preço total
    var preçoTotal = 0
    
    for (let elemento of listaProdutos){

        preçoTotal += ! isNaN(elemento)? elemento: 0
    }

    // criando uma lista com o nome e preços dos produtos
    for (let cont = 0; cont < metade; cont++){

        var option = document.createElement('option')
        option.style.fontFamily = 'monospace'
        var n1 = listaProdutos[0]
        var n2 = `R$${listaProdutos[1]}`

        option.innerHTML = `${n1}${padding(n1, 28)}${n2}`
        selection.appendChild(option)
        listaProdutos.splice(0, 2)

    }

   
    // criando uma option para o preço total
    var optionTotal = document.createElement('option')
    optionTotal.style.fontFamily = 'monospace'
    optionTotal.innerHTML = `Total${padding('total', 28)}R${preçoTotal}`
    selection.appendChild(optionTotal)
    

    // resetando o contador e atualizando os elementos
    var produto = document.getElementsByName('produto')[0]
    var preço = document.getElementsByName('preço')[0]
    var tit = document.getElementsByName('tit')[0]

    cont = 1
    ref = 5
    tit.innerHTML = `Cadastro do ${cont}º produto`
    produto.id = `produto${cont}`
    preço.id = `preço${cont}`

}
