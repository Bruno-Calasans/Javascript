
// solução 1
function preencher1(item, vezes=1){

    let array = []
    for(let cont = 0; cont < vezes; cont++){
        array.push(item)
    }
    return array
}
console.log(preencher1('teste', 5))

// solução 2
function preencher2(item, tamanho=1){
    let array = Array(tamanho)
    return array.fill(item)
}

console.log(preencher2('nada', 7))



