function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

function jokenpo(playerChoice){

    // Pegando a escolha do player
    var player = playerChoice

    // Sorteando a escolha do cpu
    var opções = ['pedra', 'papel', 'tesoura']
    var cpu = opções[randInt(0, 2)]

    // Pegando e mudando a url das imagens
    var playerImg = document.getElementById('player_image')
    playerImg.src = `media\\${player}.png`

    var cpuImg = document.getElementById('cpu_image')
    cpuImg.src = `media\\${cpu}.png`

    // Pegando o texto resultado
    var txtResultado = document.getElementById('txt_resultado')

    // Criando funções úteis
    function empate(){
        txtResultado.style.color = 'yellow'
        txtResultado.innerHTML = 'Empate!'
    }
    
    function ganhou(){
        txtResultado.style.color = '#00FF00'
        txtResultado.innerHTML = 'você ganhou'
    }
    
    function perdeu(){
        txtResultado.style.color = 'red'
        txtResultado.innerHTML = 'você perdeu'
    }

    // Colocando o resultado
    if (player == cpu){ 
        // caso de empate
        empate()
        
    }else{
        switch (player){

            case 'pedra':
                if (cpu == 'papel'){
                    perdeu()

                }else{
                   ganhou()
                }
                break

            case 'papel':
                if (cpu == 'pedra'){
                    ganhou()

                }else{
                    perdeu()
                }
                break

            case 'tesoura':
                if (cpu == 'pedra'){
                    perdeu()
                }else{
                    ganhou()
                }
                break
        } 

    }

    
}