
    // Array com chaves numéricas
    let meuArray = ['Pedro', 30, true, [false, 1000]]

    // usando destructuring em um array
    let [a, b] = meuArray
    a
    b

    // pulando a ordem
    const [,,c] = meuArray
    c

    // desestruturando arrays multidimensionais
    var [,,,[d, e]] = meuArray
    d
    e

    // array
    let array = ['teste', false] 

    const [nm, tb] = array
    nm
    tb
    