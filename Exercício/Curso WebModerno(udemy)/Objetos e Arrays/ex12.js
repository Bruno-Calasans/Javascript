
// solução 1
function removerPropriedade1(objeto, propriedade){

    let copia = copiarObjeto(objeto)
    delete copia[propriedade]
    return copia
}

function copiarObjeto(objeto){

    let copia = {}
    for(let propriedade in objeto){
        
        Object.defineProperty(copia, propriedade, {
            enumerable: true, writable: true, configurable: true,
            value: objeto[propriedade]
        })
    }
    return copia

}

let obj = {nome: 'arrombado', idade: 30, trabalhando: true, estudando: true}
console.log(removerPropriedade1(obj, 'idade'))

// solução 2
function removerPropriedade2(objeto, proprieadade){
    let copia = Object.assign({}, objeto)
    delete copia[proprieadade]
    return copia
}

console.log(removerPropriedade1(obj, 'nome'))

// solução 3
function removerPropriedade3(objeto, proprieadade){
    let copia = {...objeto}
    delete copia[proprieadade]
    return copia
}
console.log(removerPropriedade3(obj, 'trabalhando'))
