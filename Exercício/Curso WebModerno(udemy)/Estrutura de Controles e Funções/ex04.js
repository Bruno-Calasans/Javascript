
    function divisorInt(dividendo, divisor){
        const resultado = Math.floor(dividendo / divisor)
        const resto = dividendo % divisor
        console.log(`Resultado: ${resultado}`)
        console.log(`Resto: ${resto}`)
    }

    divisorInt(11, 4)

