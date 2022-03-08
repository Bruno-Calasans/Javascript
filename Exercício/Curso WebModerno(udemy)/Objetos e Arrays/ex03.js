
// primeira solução
function salarioLiquido(horas, salarioPorHora){

    if(isNaN(horas) || isNaN(salarioPorHora)) throw 'Erro1: só pode números';
    if(horas === '' || salarioPorHora === '') throw 'Erro2: não pode valores vazios';

    const salarioBruto = horas * salarioPorHora
    const salarioLiquido = (salarioBruto * 0.7).toFixed(2)
    return `Salário líquido igual a R$${salarioLiquido}`
}

console.log(salarioLiquido(10, 5))