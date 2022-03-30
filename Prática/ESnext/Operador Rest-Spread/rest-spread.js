
    // usando o spread em objetos
    const pessoa = {
        nome: 'Jeff',
        idade: 24,
    }

    // copiando todos os atributos do objeto pessoa para o objeto funcionário
    const funcionário = {empresa: 'TecMax', ...pessoa}

    // resultado do spread
    funcionário

    // usando spread em array
    const array1 = ['joão', 30, true]
    const array2 = ['Fernanda', 25, false]

    // juntando os arrays com spread
    const array3 = [...array1, ...array2]

    // resultando do spread
    array3

    // usando o rest com destructuring
    const array = [10, 60, 4, 7, 0, 1]
    let [num1, num2, ...outros] = array
    outros

    // usando rest em função
    function teste(...b){
        console.log(b);
    }
    teste(10, 9, 6, 7, 60, 100)

