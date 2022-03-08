var nomeCompleto = prompt('Digite seu nome completo').trim().toLowerCase()
var lista = nomeCompleto.split(' ')
var resposta = (nomeCompleto.indexOf('silva') != -1?'sim':'não')

console.log(`\
Nome completo: ${nomeCompleto}
Tem silva no nome? ${resposta}`)
