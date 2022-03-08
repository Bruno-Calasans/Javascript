function média(){
    var n1 = Number(document.getElementById('num1').value)
    var n2 = Number(document.getElementById('num2').value)
    var média = ((n1+n2)/2).toFixed(2)

    console.log(n1, n2, média)

    var msgMédia = document.getElementById('msgMédia')
    var situação = document.getElementById('situação')

    if (média < 5){
        situação.style.color = 'red'
        situação.innerHTML = '<strong>REPROVADO</strong>'

    }else if( média < 7){
        situação.style.color = 'yellow'
        situação.innerHTML = '<strong>RECUPERAÇÃO</strong'
    }else{
        situação.style.color = '#10ae1d'
        situação.innerHTML = '<strong>APROVADO</strong>'
    }
    msgMédia.innerHTML = `<strong>${média}</strong>`
}