
    function Teste(a, b, c){

        this.a = a
        this.b = b
        this.c = c

        this.fazer = function(){ return 'Fazendo algo'}
    }

    // Métodos Globais
    const teste1 = new Teste(10, 'nada', 9)

    // usando Object.keys()
    let array1 = Object.keys(teste1)
    array1


    // usando Object.values()
    let array2 = Object.values(teste1)
    array2

    // antes de fazer prototype
    console.log(teste1.hasOwnProperty('a'))

    //depois de fazer prototype
    Teste.prototype.d = 0
    console.log(teste1.hasOwnProperty('d'))
 