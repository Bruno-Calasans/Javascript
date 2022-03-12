
// solução 1
function multiString1(tamanho=1, string='+'){

    let novaString = ''
    for(let cont = 1; cont <= tamanho; cont++){
        novaString += string
    }
    return novaString
}
console.log(multiString1(1))

// solução 2
function multiString2(tamanho=1, string='+'){
    return Array(tamanho).fill(string).join('')
}
console.log(multiString2())

// solução 3
function multiString3(vezes, string='+'){
    return string.repeat(vezes)
}
console.log(multiString3(4))

