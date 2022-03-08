
/*

    // function closure
    function funçãoExterna(varExterna){

        return function funçãoInterna(varInterna){
            console.log('Variável externa: ' + varExterna)
            console.log('Variável interna: ' + varInterna)

        }

    }

    const teste = funçãoExterna('fora')
        
    // chamando a função guardada dentro de teste
    teste()

    // mais um exemplo
    function criarCont(){
        let cont = 0

        return function contar(){
            cont += 1
            return cont
        }
    }

    const objetoCont = criarCont()
    console.log(objetoCont())
    console.log(objetoCont())
    console.log(objetoCont())
*/

    // closure - exemplo 1
    const x = 'global'

    function primeira(){
        return x
    }

    function segunda(){
        const x = 'local'
        return primeira()
    }
    console.log(segunda())

    // closure - exemplo 2
    const y = 'Global'

    function fora(){
        const y = 'local'
        return function dentro(){
            return y
        }
    }
    let resultado = fora()
    console.log(resultado())

    

    