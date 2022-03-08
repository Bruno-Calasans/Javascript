// Criando números aleatórios 
//var num = Math.floor(Math.random() * 10)+1
//console.log(num)

//Criando uma função para isso
function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

var pessoa1 = prompt('Primeira pessoa')
var pessoa2 = prompt('Segunda pessoa')
var pessoa3 = prompt('Terceira pessoa')
var pessoa4 = prompt('Quarta pessoa')

pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]
pessoaSorteada = pessoas[randInt(0, 3)]

console.log(pessoaSorteada)
alert(`A pessoa sorteada é ${pessoaSorteada}`)
