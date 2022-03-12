

// solução 1
function contarPalavras(frase = ''){

    let arrayPalavras = frase.split(' ')
    let numPalavras = arrayPalavras.length
    return numPalavras
}

let frase1 = 'Eu sou uma frase de teste'
console.log(contarPalavras(frase1))