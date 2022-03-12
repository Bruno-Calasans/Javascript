
    // usando o método map()
    let numeros = [10, 2, 7, 3]

    // exemplo 1
    console.log(numeros)
    let resultado = numeros.map((elemento, index, array)=> elemento*2)
    console.log(resultado)
    console.log(numeros)

    // exemplo 2
    const somar = (valor, soma=10) => valor + soma
    let resultado2 = numeros.map(
        (elemento) => somar(elemento, 10)
    )
    console.log(resultado2)

    // exemplo 3
    function fmt(valor='', simb='R$'){
        return simb+valor.toFixed(2)
    }
    let resultado3 = numeros.map(
        (elemento) => fmt(elemento)
    )
    console.log(resultado3)
    
    // exmeplo 4
    const metade = a => a/2
    let resultado4 = numeros.map(metade)
    console.log(resultado4)

    // exmeplo 5
    function teste(elemento, index, array){
        return `Index: ${index} Elemento: ${elemento}`
    }
    let resultado5 = numeros.map(teste)
    console.log(resultado5)

