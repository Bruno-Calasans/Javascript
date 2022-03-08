

    // formas de declaração uma função

    console.log(somar(10, 2)) // funciona
    console.log(x(10, 2)) // dá erro
    console.log(y(10, 2)) // dá erro

    // function declaration
    function somar(a, b){
        return a + b
    }

    // function expression
    let x = function sub(a, b){
        return a - b
    }

    // named function expression
    let y = function multi(a, b){
        return a * b
    }

    
