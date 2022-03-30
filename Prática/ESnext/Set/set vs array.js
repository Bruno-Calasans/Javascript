

    // sets vs arrays


    // inicialização -----------------------------------------------------------

    // array - sem constructior
    const array1 = []
    const array = ['azul', 'verde', 'laranja']

    // com constructor
    const arry2 = new Array()
    const array3 = new Array('azul', 'verde', 'laranja')

    // sets
    const set = new Set(['azul', 'verde', 'laranja'])

    // acessando elementos ---------------------------------------------------

    // array
    console.log(array[0]);
    console.log(array[3]);
    
    // em set
    
    // verificando se um elemento existe ---------------------------------------

    // em array
    let resultado = array.indexOf(90) == -1 ? true: false
    console.log(resultado);
    console.log(array.includes('azul'));

    // em set
    console.log(set.has('laranja'));
    
    // adicionando elementos ---------------------------------------------------

    // em arrays
    array.push('rosa')
    array.unshift('marrom')
    array[3] = 'vermelho'
    console.log(array);

    // em set
    set.add('rosa')
    console.log(set);

    // removendo elementos -----------------------------------------------------

    // em arrays
    array.pop()
    array.shift()
    array.splice(1, 1)
    console.log(array);

    // em set
    set.delete('azul')
    console.log(set);
    

    // iteração ----------------------------------------------------------------

    // em arrays
    for(let elemento of array){
        console.log(elemento);
    }

    array.forEach((e) => console.log(e))

    // em sets
    for(let elemento of set){
        console.log(elemento);
    }

    set.forEach(e => console.log(e))
