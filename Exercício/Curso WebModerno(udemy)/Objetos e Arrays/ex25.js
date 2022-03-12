
// solução 1
function removerVogais1(string=''){

    let vogais = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o','U', 'u']

    for(let vogal of vogais){
        string = string.replace(vogal, '')
    }
    return string

}

let string = 'testando'
console.log(removerVogais1(string))

// solução 2
function removerVogais2(string=''){
    return string.replace(/[aeiou]/gi, '')
}

console.log(removerVogais2(string))

