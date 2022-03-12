
// solução 1
function filtrarQuantDigitos1(array=[], numDigitosDesejados=1){

    let numeros = []
    for(let numero of array){
        let numDeDigitos = numero.toString().length
        if(numDeDigitos == numDigitosDesejados) numeros.push(numero)
    }
    return numeros
}

let array = [38, 2, 365, 10, 125, 11, 1000]
console.log(filtrarQuantDigitos1(array, 3))

// solução 2
function filtrarQuantDigitos2(array=[], numDigitosDesejados=1){

    return array.filter((numero) => {
        let numDeDigitos = numero.toString().length
        return numDeDigitos == numDigitosDesejados
    })
}

console.log(filtrarQuantDigitos2(array, 3))

