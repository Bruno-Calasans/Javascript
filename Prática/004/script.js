var primeiroNome = window.prompt('Primeiro nome?')
var sobreNome = window.prompt('Sobrenome?')
var nomeCompleto = primeiroNome+' '+sobreNome
window.alert('Olá, '+nomeCompleto)

var n1 = Number.parseFloat(window.prompt('Digite um número'))
var n2 = Number.parseFloat(window.prompt('Digite outro número'))
var soma = n1+n2
window.alert('A soma entre '+ n1 + ' e ' + n2 + ' é = ' + soma)
window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`)


//Caso o valor não seja um Number, a conversão
//retorna NaN(Not a Number)


