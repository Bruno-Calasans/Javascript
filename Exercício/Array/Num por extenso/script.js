var times  = ['fudidos', 'arrombados', 'lixosos', 'impedidos', 'vagabundos',
            'revolucionários', 'mal amados', 'empregados', 'cuspidos', 'merdosos', 'os nadas', 'os tudos', 'lixeiros', 'coletadores', 'invisíveis', 'quebrados', 'ajeitados', 'partidos', 'destruidores', 'sebosos']

// pegando os botões
var showFirst = document.getElementById('showFirst')
var showLast = document.getElementById('showLast')
var showEspecifc = document.getElementById('showEspecific')
var showAll = document.getElementById('showAll')
var search = document.getElementById('search')

// adicionando eventos
showFirst.addEventListener('click', mostrarPrimeiro)
showLast.addEventListener('click', mostrarUltimo)
showEspecifc.addEventListener('click', mostrarEsp)
showAll.addEventListener('click', mostrarTudo)
search.addEventListener('click', pesquisar)

function criarLista(){
    var listaTime = document.getElementById('teamList')
    var searchList = document.getElementById('lista_times')

    for (var cont = 0; cont < times.length; cont++){

        // criando elementos para fieldset
        var option = document.createElement('option')
        option.id = `time${cont + 1}`
        option.innerHTML = `${cont + 1}ºlugar: ${times[cont]}`
        listaTime.appendChild(option.cloneNode(true))

        // criando elementos para datalist
        var option2 = document.createElement('option')
        option2.value = `${times[cont]}`
        searchList.appendChild(option2.cloneNode(true))
    }

}

function mostrarPrimeiro(){
    var inputFirst = document.getElementById('first')

    // validando o input#first
    if (! inputFirst.checkValidity()){ // caso n esteja válido
        inputFirst.reportValidity()

    }else{ // caso esteja válido
        var num  = Number(inputFirst.value)

        for (var cont = 1; cont <= 20; cont++){

            // ocultando os elementos depois do elemento num
            if (cont >= num + 1){
                var time = document.getElementById(`time${cont}`)
                time.style.visibility = 'hidden'

            // mostrando os elementos até o elemento num
            }else{
                var time = document.getElementById(`time${cont}`)
                time.style.visibility = 'initial'

            }
        }
    }
}

function mostrarUltimo(){
    var inputFirst = document.getElementById('last')

    if (! inputFirst.checkValidity()){
        inputFirst.reportValidity()

    }else{

        var num = Number(inputFirst.value)
        for (var cont = 20; cont >= 1; cont--){

            if (cont <= 20 - num){
                var time = document.getElementById(`time${cont}`)
                time.style.visibility = 'hidden'

            }else{
                var time = document.getElementById(`time${cont}`)
                time.style.visibility = 'initial'

            }
        }
    }

}

function mostrarEsp(){
    var inputEsp = document.getElementById('especific')

    if (! inputEsp.checkValidity()){
        inputEsp.reportValidity()

    }else{

        var num = inputEsp.value
        for (var cont = 1; cont <= 20; cont++){

            var time = document.getElementById(`time${cont}`)

            if (cont == num){
                time.style.visibility = 'initial'
            }else{
                time.style.visibility = 'hidden'
            }

        }
    }

}

function mostrarTudo(){

    for (var cont = 1; cont <= 20; cont++){
        var time = document.getElementById(`time${cont}`)
        time.style.visibility = 'initial'
    }
}

function pesquisar(){
    var pesquisa = document.getElementById('pesquisa')

    // pesquisando o index do elemento na lista time
    var posPesquisa = times.indexOf(pesquisa.value)

    // se não encontrar, retorna -1
    if(posPesquisa != -1){

        // pegando o elemento fieldset#teamList
    var listaTime = document.getElementById('teamList')
        
        // passando por todos os indexs do elemento fieldset#teamList
        for (var pos in listaTime){

            // mostrando apenas o elemento que foi pesquisado
            if (pos == posPesquisa){
                listaTime[pos].style.visibility = 'initial'

            // ocultando todos os elementos não pesquisados
            }else{
                listaTime[pos].style.visibility = 'hidden'
            }
        }

    }else{ // se não encontrar
        pesquisa.setCustomValidity('Digite um nome time válido')
        pesquisa.reportValidity()
    }
}