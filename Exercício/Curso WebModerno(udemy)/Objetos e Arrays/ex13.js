
// solução 1
function separarNumeros1(array=[]){

    let numeros = []
    for(let elemento of array){
        if(typeof elemento == 'number') numeros.push(elemento)
    }
    return numeros
}

let array = ['merda', 39, true, false, 95.4]
let array2 = ['abaca', '11']
console.log(separarNumeros1(array))
console.log(separarNumeros1(array2))

// solução 2
function separarNumeros2(array=[]){
    return array.filter((elemento) => elemento.constructor == Number)
}

console.log(separarNumeros1(array))
console.log(separarNumeros1(array2))