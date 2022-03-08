
    // primeira solução
    function mostrarMes1(num=1){

        const meses = [
            'janeiro',
            'fevereiro',
            'março',
            'abril',
            'maio',
            'junho',
            'julho',
            'agosto',
            'setembro',
            'outubro',
            'novembro',
            'dezembro'
        ]
        if(num < 1 || num > 12) throw 'Erro: valores inválidos!'
        else return meses[--num]
    }

    // segunda solução
    function mostrarMes2(num=1){
        switch (num){

            case 1:
                return 'Janeiro'
            case 2:
                return 'fevereiro'
            case 3:
                return 'março'
            case 4:
                return 'abril'
            case 5:
                return 'maio'
            case 6:
                return 'junho'
            case 7:
                return 'julho'
            case 8:
                return 'agosto'
            case 9:
                return 'setembro'
            case 10:
                return 'outubro'
            case 11:
                return 'novembro'
            case 12:
                return 'dezembro'
            default:
                throw 'Erro: valor inválido'
        }
    }


    console.log(mostrarMes1(1))
    console.log(mostrarMes2(12))

        