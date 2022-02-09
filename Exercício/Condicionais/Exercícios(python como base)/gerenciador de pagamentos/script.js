function ativarParcelasOption(){
    var option = Number(document.getElementById('pagamento').value)
    var parcelasOption = document.getElementById('num_parcelas')
    switch (option){
        case 4:
            parcelasOption.disabled = false
            break

        default:
            parcelasOption.disabled = true
            break
    }  

    
}

function calcular_compras(){

    //Valores
    var valorInicial = document.getElementById('valorCompras').value
    var formaPagamento = Number(document.getElementById('pagamento').value)
    var valorTotal = document.getElementById('valorTotal')

    // Textos
    var txtDesconto = document.getElementById('descTxt')
    var parcelaTxt = document.getElementById('parcelaTxt')

    switch (formaPagamento){

        case 1:
            var valorFinal = valorInicial * 0.9
            txtDesconto.innerHTML = '10%'
            parcelaTxt.innerHTML = `${valorFinal} em 1x sem juros`
            break

        case 2:
            var valorFinal = valorInicial * 0.95
            txtDesconto.innerHTML = '5%'
            parcelaTxt.innerHTML = `${valorFinal} em 1x sem juros`
            break

        case 3:
            valorFinal = valorInicial
            txtDesconto.innerHTML = 'sem desconto'
            parcelaTxt.innerHTML = `${valorFinal} em 1x sem juros`
            break

        case 4:
            var numParcelas = document.getElementById('num_parcelas').value
            var valorParcela = ((valorInicial/numParcelas) * 1.2).toFixed(2)
            var valorFinal = (numParcelas * valorParcela).toFixed(2)

            txtDesconto.innerHTML = 'sem desconto'
            parcelaTxt.innerHTML = `${valorParcela} em ${numParcelas}x com 20% de juros`
            break
    }
    valorTotal.innerHTML = `${valorFinal}`
}

