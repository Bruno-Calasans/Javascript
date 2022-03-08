

    function ajustarValor(valor=0, simbolo = 'R$'){
        const novoValor = valor.toFixed(2).replace('.', ',')
        console.log(`${simbolo}${novoValor}`)
    }

    ajustarValor(6.564)