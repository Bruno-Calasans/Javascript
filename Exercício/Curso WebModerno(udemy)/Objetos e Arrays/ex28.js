
// solução 1
function nMaior1(array=[], n=1){

    for(let i = 0; i < array.length; i++){

        // array[i] -> múmero referência
        for(let j = 0; j < array.length; j++){

        // array[j] -> número comparado
            if(array[i] > array[j]){

                let aux = array[j]
                array[j] = array[i]
                array[i] = aux
            }

        }
    }
    return array[n - 1]
}

let array = [12, 16, 1, 5]
console.log(nMaior1(array, 1))

// solução 2
function nMaior2(array=[], n=1){

    let ordemCrescente = []
    let tamanho = array.length;

    while(tamanho > 0){

        // pegando o maior atual
        let maiorAtual = Math.max(...array)
        // pegando o index do maior valor atualmente
        let indexMaiorAtual = array.indexOf(maiorAtual)
        // inserindo o maior valor atual no array
        ordemCrescente.push(maiorAtual)
        // removendo o elemento atual do array original
        array.splice(indexMaiorAtual, 1)
        // ajustando o tamanho do array
        tamanho--
    }
    return ordemCrescente[n - 1]
}

console.log(nMaior2(array, 2))

