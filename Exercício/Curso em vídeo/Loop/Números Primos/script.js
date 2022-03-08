function liberar(){
    var opção = document.getElementsByName('opção')
    var opcNum = document.getElementById('número')
    var opcIntervalo = document.getElementById('intervalo')

    if (opção[0].checked){
        opcNum.style.display = 'inherit'

    }else{
        opcNum.style.display = 'none'
    }

    if (opção[1].checked){
        opcIntervalo.style.display = 'inherit'
    }else{
        opcIntervalo.style.display = 'none'
    }
}

function calcularPrimo(){
    // Opções
    var opções = document.getElementsByName('opção')
    var opc1 = opções[0].checked

    // Criando uma variável para somar os divisores
    var divisores = 0

    if (opc1){

        var num = Number(document.getElementById('num').value)
        var rstTxt = document.getElementById('resultado_txt')
        for (var cont = 1; cont <= num; cont++){
            divisores += (num % cont == 0)? 1: 0  
        } 
        rstTxt.innerHTML = divisores == 2? `O número ${num} é primo`: `O número ${num } não é primo`

    }else{

        var start = Number(document.getElementById('início').value)
        var end = Number(document.getElementById('fim').value)

        // Verificando dados
        if (start == end) {
            alert('Erro: os campos devem ser preenchidos e não podem ser iguais!')
        
        }else{

            if(start == 0 || end == 0){
                alert('Aviso: como um campo não foi preenchido, será considerado como zero (0)!')
            }
            
            var intervaloTxt = document.getElementById('contagem_txt')
            intervaloTxt.innerHTML = 'Números primos: '
            if (start < end){ // Números primos em contagem crescente

                for (start; start <= end; start++){
                    for (var cont = 1; cont <= start; cont++){
                        divisores += (start % cont == 0)? 1: 0  
                    }
                    intervaloTxt.innerHTML += (divisores == 2)? `${start} `:' '
                    divisores = 0
                }

            }else { // Números primos em contagem decrescente

                for (start; start >= end; start--){
                    for (var cont = 1; cont <= start; cont++){
                        divisores += (start % cont == 0)? 1: 0  
                    }
                    intervaloTxt.innerHTML += (divisores == 2)? `${start} `:' '
                    divisores = 0
                }
            }   

        }
    }
    
    
}

