
    // continução dos métodos de arrays
    let array = [100, 'string', true, 9.7]

    // método fill()
    console.log(array)
    console.log(array.fill('novo valor', 1, 2)) // substituindo um elemento

    console.log(array)
    console.log(array.fill('novo valor')) // substituindo tudo


    // método copyWithin()
    array = [100, 'string', true, 9.7]

    //console.log(array)
    //console.log(array.copyWithin(0, 1, 2))

    //console.log(array)
    //console.log(array.copyWithin(0, 3))

    // método indexOf()
    array = [100, 'string', true, 9., 100, true]

    console.log(array)
    console.log(array.indexOf(true)) // elemento encontrado
    console.log(array.indexOf('elemento')) // elemento não encontrado
    console.log(array.indexOf('string', 2)) // usando o segundo parâmetro

    // método lastIndexOf()
    console.log(array)
    console.log(array.lastIndexOf(true)) // elemento encontrado
    console.log(array.lastIndexOf('elemento')) // elemento não encontrado
    console.log(array.lastIndexOf('string', 2)) // usando o segundo parâmetro

    // método includes()
    console.log(array)
    console.log(array.includes('string')) // tem o elemento 'string'
    console.log(array.includes(666)) // não tem o elemento 666
    console.log(array.includes(true, 3)) // usando o segundo parâmetro

    // método toString()
    console.log(array)
    console.log(array.toString())

    // método join()
    console.log(array)
    console.log(array.join(' '))

    