var submit = document.getElementById('submit')
submit.addEventListener('click', escrever)

function escrever(){
    var num = document.getElementById('num')

    // checando a validade do campo input
    if (! num.checkValidity()){ // casa as restrições n sejam válidas
        num.reportValidity()

    }else{ // caso contrário
        var valor = num.value
        var lista = [
            'zero','um','dois','três','quatro',
            'cinco', 'seis', 'sete', 'oito', 'novo',
            'dez', 'onze', 'doze', 'treze', 'quartoze',
            'quinze', 'dezesseis', 'dezessete', 'dezoito',
            'dizenove', 'vinte']

        var txt = document.getElementById('resultado')
        txt.innerHTML = `${valor} é ${lista[valor]}`
    }
}