
// solução 1
function calcularMedia1(array=[]){

    
    let soma = 0
    for(let elemento of array){
        soma += elemento
    }
    let media = soma / array.length
    return media
}
let array1 = [0, 10]
let array2 = [1, 2, 3, 4, 5]

console.log(calcularMedia1(array1))
console.log(calcularMedia1(array2))

// solução 2
function calcularMedia2(array=[]){

    let soma = array.reduce(
        (acumulador, elementoAtual) => acumulador + elementoAtual)

    let media = soma / array.length
    return media
}

console.log(calcularMedia2(array1))
console.log(calcularMedia2(array2))