var submit = document.getElementById('submit')
submit.addEventListener('click', sortear)

function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
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

function sortear(){
    var min = document.getElementById('min')
    var max = document.getElementById('max')
    var vezes = document.getElementById('vezes').value
    
    if (! min.checkValidity()){ // checando a válidade do input min
        min.reportValidity()

    }else if (! max.checkValidity()){ // checando a válidade do input max
        max.reportValidity()

    }else{

        var sorteados = [] // criando um array para guardar os números
        // pegando os valores mínimo e máximo
        var valorMin = Number(min.value)
        var valorMax = Number(max.value)

        // sorteador de acordo com o valor da variável vezes
        for (var cont = 0; cont < vezes; cont++){
            var num = randInt(valorMin, valorMax)
            sorteados.push(num)
        }

        // pegando menor e maior valores
        var menor = menorValor(sorteados)
        var maior = maiorValor(sorteados)

        // mostrando os números sorteados
        var txt = document.getElementById('resultado')
        txt.innerHTML = 'Números sorteados: '

        for (let elemento of sorteados){

            txt.innerHTML += `${elemento} `
        }
        txt.innerHTML += `<b><br> Maior valor: ${maior}</b>`
        txt.innerHTML += `<b><br> Menor valor: ${menor}</b>`
    }
}