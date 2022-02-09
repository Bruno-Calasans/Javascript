var primeiroNome = window.prompt('Primeiro nome')
var segundoNome = window.prompt('Segundo nome')
var nomeCompleto = `${primeiroNome.toUpperCase()} azu${segundoNome.toUpperCase()}`
var peso = Number(window.prompt('Digite seu peso')).toFixed(2).replace('.', ',')

window.document.write(`Olá, ${nomeCompleto}`)
window.document.write(`Seu nome tem ${nomeCompleto.length} letras`)
window.document.write(`Você tem ${peso} Kg`)

