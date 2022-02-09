function verificar_emprestimo(){
    var valorCasa = document.querySelector("#casa").value
    var salario = document.querySelector("#salário").value
    var anos = document.querySelector("#anos").value

    var prestMensal = (valorCasa / (anos * 12)).toFixed(2)
    var msg = document.getElementById("msg")

    if (prestMensal > 0.3 * salario){
        msg.style.color = 'red'
        msg.innerHTML = "Infelizmente não conseguimos aprovar seu empréstimo :("

    }else{
        msg.style.color = 'green'
        msg.innerHTML = `\
        Seu empréstimo foi aprovado com sucesso! <br>\
        O valor de cada prestação mensal será <em>R$${prestMensal}</em>`
    }

}