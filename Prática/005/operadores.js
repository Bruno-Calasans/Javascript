var nome = window.prompt('Qual seu nome?')
var idade = window.prompt('Qual a sua idade?')

//Usando o operador ternário
var resultado = idade >= 18 ?'maior de idade':'menor de idade'
window.alert(`Olá, ${nome}. Você é ${resultado}`)

//Operadores Lógicos
// ! (not)
// && (and)
// ||