var cidade = prompt('Digite a sua cidade').trim().toLowerCase()
var primeiroNome = cidade.slice(0, cidade.indexOf(' '))
// Operador Ternário
var resultado = (primeiroNome == 'santo'?'sim':'não')

console.log(`Nome da Cidade: ${cidade}`)
console.log(`Começa com SANTO: ${resultado}`)

