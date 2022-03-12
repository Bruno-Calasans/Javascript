
// solução 1
function inverterObjeto(obj){

    let objInvertido =  {}
    for(let atributo in obj){

        let valorAtual = obj[atributo]
        objInvertido[valorAtual] = atributo
    }
    return objInvertido
}

let obj = { a: 1, b: 2, c: 3}
console.log(inverterObjeto(obj))