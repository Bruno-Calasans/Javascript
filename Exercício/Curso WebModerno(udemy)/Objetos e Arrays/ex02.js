
// solução 1
function convertIdadeDias1(idade){

    if(typeof idade != 'number' || idade === '') throw 'Erro1: vazio ou não-número 1'
    return idade * 365
}

// solução 2
function convertIdadeDias2(idade){
    if(idade.constructor != Number || idade === '') throw 'Erro2: vazio ou não-número'
    return idade * 365
}

// solução 3
function convertIdadeDias3(idade){
    if(isNaN(idade) || idade === '') throw 'Erro3: vazio ou não-número'
    return idade * 365
}

console.log(convertIdadeDias1(0))

console.log(convertIdadeDias2(0))

console.log(convertIdadeDias3(3))
