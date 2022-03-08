var salario = Number(prompt('Digite seu salário R$'))
var desconto = 1 - (Number(prompt('Digite o valor do desconto em %'))/100)
var novoSalario = salario * desconto
var porcDesconto = ((1-desconto)*100).toFixed(2)
alert(`\
O salário de R$${salario} com ${porcDesconto}% de desconto ficará R$${novoSalario} `)