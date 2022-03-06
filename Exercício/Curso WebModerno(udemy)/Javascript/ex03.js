
// primeira solução
function salarioLiquido(horas, salarioPorHora){
    const salarioBruto = horas * salarioPorHora
    const salarioLiquido = (salarioBruto * 0.7).toFixed(2)
    return `Salário líquido igual a R$${salarioLiquido}`
}

console.log(salarioLiquido(180, 60))