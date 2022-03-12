
// solução 1
function somar1(array=[]){

    let soma = 0
    for(let elemento of array){
        soma += elemento
    }
    return soma
}
let array = [10, 7, 9, 6, 0]
console.log(somar1(array))

// solução 2
function somar2(array=[]){

    let soma = 0
    soma = array.reduce((e, eAtual) => e + eAtual)
    return soma
}
console.log(somar2(array))

// solução 3
function somar3(array=[]){
    let soma = 0
    array.forEach((elemento) => soma += elemento)
    return soma
}
console.log(somar3(array))