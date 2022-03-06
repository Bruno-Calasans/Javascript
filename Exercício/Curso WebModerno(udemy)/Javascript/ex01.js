
// primeira solução
function cumprimentar1(text){
    return 'Olá, '+text+'!'
}

// segunda solução
function cumprimentar2(text){
    return `Olá, ${text}`
}

// terceira solução
function cumprimentar3(text){
    return 'Olá'.concat(text).concat('!')
}

console.log(cumprimentar1('teste1'))
console.log(cumprimentar1('teste2'))
console.log(cumprimentar1('teste3'))
