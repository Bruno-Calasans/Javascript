function aparecerEscolhas(){
    var tipoContagem = document.getElementById('tipo').value
    var divEscolhas = document.getElementById('escolha_multi')

    divEscolhas.style.display = tipoContagem == 'multi'? 'initial' : 'none'

}


function contagemPersonalizada(){
    var start = Number(document.getElementById('num_inicial').value)
    var end = Number(document.getElementById('num_final').value)


    // Validando os números
    if (start == end){
        alert('Erro: os números inicial e final não podem ser iguais ou esterem vazios!')

    }else{

        if (end == 0){
            alert('Aviso: como você deixou o número final vazio, ele será considerado como zero(0)!')

        }else if (start == 0){
            alert('Aviso: como você deixou o número inicial vazio, ele será considerado como zero(0)!')
        }

        // Pegando as mensagens
        var contagemTxt = document.getElementById('contagem_txt')
        contagemTxt.innerHTML = 'Contando...'

        var somaTotal = document.getElementById('soma')
        somaTotal.innerHTML = 'Soma Total: '
        var soma = 0

        // Pegando o tipo de contagem
        var tipoContagem = document.getElementById('tipo').value

        switch (tipoContagem){

            case 'par':
                if (start < end){ // Pares crescentes
                    for (start; start <= end; start++){
                        var par = (start % 2 == 0)? start:' '
                        soma += Number(par)
                        contagemTxt.innerHTML += par
                    }

                }else{ // Pares Decrescentes
                    for (start; start >= end; start--){
                        var par = (start % 2 == 0)? start:' '
                        soma += Number(par)
                        contagemTxt.innerHTML += par
                    }
                }
                break

            case 'ímpar': 
                if ( start < end){ // Ímpares crescentes
                    for (start; start <= end; start++){
                        var impar = (start % 2 == 1)? start:' '
                        soma += Number(impar)
                        contagemTxt.innerHTML += impar
                    }

                }else{ //Ímpares decrescentes
                    for (start; start >= end; start--){
                        var impar = (start % 2 == 1)? start:' '
                        soma += Number(impar)
                        contagemTxt.innerHTML += impar
                    }
                }
                break

            case 'multi': 
                var mult = Number(document.getElementById('múltiplo').value)
                if (start < end){ // Múltiplos crescentes
                    for (start; start <= end; start++){
                        var multiplo = (start % mult == 0)? start: ' '
                        soma += Number(multiplo)
                        contagemTxt.innerHTML += multiplo
                    }

                }else{ //Múltiplos decrescentes
                    for (start; start >= end; start--){
                        var multiplo = (start % mult == 0)? start: ' '
                        soma += Number(multiplo)
                        contagemTxt.innerHTML += multiplo
                    }

                }
                break
        }
        // Mensagem final (bandeira)
        contagemTxt.innerHTML += '\u{1F3C1}'

        // Soma total
        somaTotal.innerHTML += soma

    }  
   
}