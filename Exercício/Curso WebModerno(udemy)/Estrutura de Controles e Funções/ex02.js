
    //
    function classificarTriangulo(a, b, c){

        if(a == b & b == c ) console.log('Equilátero')
        else if (a == b || b == c || a == c) console.log('Isóscelees')
        else console.log('Escaleno')
    }

    classificarTriangulo(1, 16, 10)
