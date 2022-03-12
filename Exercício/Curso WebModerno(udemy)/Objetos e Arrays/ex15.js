
// solução 1
function indexValorPares1(array=[]){

    let novoArray = []
    for(let i = 0; i < array.length; i++){
        console.log(i ,array[i])

        if(i % 2 == 0 && array[i] % 2 == 0) novoArray.push(array[i])
    }
    return novoArray
}
let array = [10, 70, 22, 43]

console.log(indexValorPares1(array))

// solução 2
function indexValorPares2(array=[]){

    let novoArray = []
    novoArray = array.filter((e, i) => e % 2 == 0 && i % 2 == 0)
    return novoArray
}
console.log(indexValorPares2(array))