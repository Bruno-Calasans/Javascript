
// primeira solução
function cumprimentar1(text){
    if(typeof text != 'string' || text == '') throw 'Erro: vazio ou não-string'
    return 'Olá, '+text+'!'
}

// segunda solução
function cumprimentar2(text){
    if(text.constructor =! String || text == '') throw 'Erro: vazio ou não-string'
    return `Olá, ${text}`
}

// terceira solução
function cumprimentar3(text){
    return 'Olá'.concat(text).concat('!')
}

console.log(cumprimentar1('teste1'))

console.log(cumprimentar2('teste2'))

console.log(cumprimentar3('teste3'))
