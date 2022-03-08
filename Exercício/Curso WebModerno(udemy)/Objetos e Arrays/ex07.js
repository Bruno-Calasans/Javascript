

    // solução 1
    function estaEntre1(numero, minimo, maximo, inclusivo=false){

        // ajeitando a ordem
        if(minimo > maximo){
            let aux = minimo
            minimo = maximo
            maximo = aux
        }

        if(inclusivo){
            if(numero >= minimo & numero <= maximo)return true;
            else return false
        
        }else{
            if(numero > minimo & numero < maximo) return true; 
            else return false
        }

    }

    // solução 2
    function estaEntre2(numero, minimo, maximo, inclusivo=false){

        // ajeitando a ordem
        if(minimo > maximo){
            let aux = minimo
            minimo = maximo
            maximo = aux
        }
        console.log(minimo, maximo)

        if(inclusivo) return Boolean(numero >= minimo & numero <= maximo)
        else return Boolean(numero > minimo & numero < maximo)
    }

    // solução 3
    function estaEntre3(numero, minimo, maximo, inclusivo=false){

        // ajeitando a ordem
        if(minimo > maximo){
            let aux = minimo
            minimo = maximo
            maximo = aux
        }
        console.log(minimo, maximo)

        return (inclusivo) ? Boolean(numero >= minimo & numero <= maximo):
        Boolean(numero > minimo & numero < maximo)
    }



