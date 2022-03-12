
    // métodos de arrays - parte 3

    // método concat()
    let array1 = ['nada', 100, true, 8.6]
    let array2 = ['joão', false]

    // concatenando arrays
    console.log(array1)
    console.log(array2)
    console.log(array1.concat(array2))

    // concanteando array e outros tipos de dados
    let array = ['elemento', 99]
    let variavel = 'variável'
    console.log(array.concat(variavel))

    // concatenando variáveis, arrays e matrizes
    console.log([].concat([1, 2, 3], 9, 6, [[25, 89]]))

    // método slice()
    array = ['elemento', 99, true, 5.6]
    console.log(array)
    console.log(array.slice(0, 2))
    console.log(array)

    console.log(array)
    console.log(array.slice(0))
    console.log(array)

