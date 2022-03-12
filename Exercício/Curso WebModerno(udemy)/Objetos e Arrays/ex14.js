
// solução 1
function objectToArray1(objeto){

    let array = []
    for(let atributo in objeto){
        let chaveValor = [atributo, objeto[atributo]]
        array.push(chaveValor)
    }
    return array
}

let obj = {nome: 'fernanda', idade: 25, estudando: true}

console.log(objectToArray1(obj))

// solução 2
function objectToArray2(objeto){

    let keys = Object.keys(objeto)
    let chaveValor = keys.map((e) => [e, objeto[e]])
    return chaveValor
}
console.log(objectToArray2(obj))

// solução 3
function objectToArray3(objeto){
    return Object.entries(objeto)
}
console.log(objectToArray3(obj))