
    // atributos de arrays
    let array = ['nada', 10, , , 9.6]
    console.log(array.length) // atributo lenght

    // métodos de arrays
    array = ['nada', 10, 9.6]

    // métodos para adicionar e remover elementos ------------------------------

    // método pop()
    console.log(array)
    console.log(array.pop())
    console.log(array)

    // método push()
    console.log(array)
    console.log(array.push('novo valor', 666))
    console.log(array)

    // método shift()
    console.log(array)
    console.log(array.shift())
    console.log(array)

    // método unshift()
    console.log(array)
    console.log(array.unshift('novo valor', 666))
    console.log(array)

    // deletando elemento com delete
    console.log(array)
    delete array[2]
    console.log(array)

    // método splice()
    array = ['nada', 10, 9.6]

    console.log(array) 
    console.log(array.splice(1, 2, 'primeiro', 'segundo')) // adicionando
    console.log(array)

    console.log(array) 
    console.log(array.splice(1, 1)) // deletando um item
    console.log(array)

    console.log(array) 
    console.log(array.splice(0, 2)) // deletando dois itens
    console.log(array)


    