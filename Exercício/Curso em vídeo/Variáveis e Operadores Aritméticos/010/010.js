var salario = Number(prompt('Digite o salário R$'))
var aumento = Number(prompt('Digite o aumento em %'))
var novoSalario = (salario * (1+(aumento/100))).toFixed(2)

alert(`\
Salário: R$${salario}
Aumento: ${aumento}%
Novo salário: R$${novoSalario}`)

