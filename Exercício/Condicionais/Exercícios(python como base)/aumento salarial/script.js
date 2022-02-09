function aumento_salarial(){
    var salario = document.getElementById('sal').value
    var msg = document.querySelector("#msg")

    // Operador ternário: verificando o salário
    var aumento = (salario > 1250) ? 1.1 : 1.15
    var novoSalario = (salario * aumento).toFixed(2)

    // Mostrando uma mensagem personalizada
    msg.innerHTML = `Com um salário de R$${salario}, seu novo salário será R$${novoSalario}`
}