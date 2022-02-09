var submit = document.getElementById('submit')
submit.addEventListener('click', parImp)
var acertos = 0
var tentativas = 0

function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

function parImp(){
    var player = Number(document.getElementById('num').value)

    if (player == ''){
        alert('Erro: você não digitou nenhum número!')

    }else{
        var escolha = document.getElementById('escolha').value
        var cpu = randInt(0, 10)
        var txt = document.getElementById('resultado')
        var soma = cpu + player
        tentativas++

        switch (escolha){
            
            case 'p':

                if (soma % 2 == 0){
                    txt.innerHTML = `\
                    CPU: ${cpu} <br>
                    Você: ${player} <br>
                    Soma: ${cpu + player} <br>
                    Resultado: você GANHOU!`
                    acertos++

                }else{
                    txt.innerHTML = `Você perdeu. <br>
                    Número de acertos: ${acertos} <br>
                    Número de tentativas: ${tentativas} <br>
                    Porcentagem de acerto: ${(acertos/tentativas * 100).toFixed(2)}%`
                    acertos = 0
                    tentativas = 0

                }
                break

            case 'i':

                if (soma % 2 != 0){
                    txt.innerHTML = `\
                    CPU: ${cpu} <br>
                    Você: ${player} <br>
                    Soma: ${cpu + player} <br>
                    Resultado: você GANHOU!`
                    acertos++

                }else{
                    txt.innerHTML = `Você perdeu. <br>
                    Número de acertos: ${acertos} <br>
                    Número de tentativas: ${tentativas} <br>
                    Porcentagem de acerto: ${(acertos/tentativas * 100).toFixed(2)}%`
                    acertos = 0
                    tentativas = 0

                }
               break

        }   
    }
}
