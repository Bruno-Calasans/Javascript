var submit = document.getElementById('submit')
submit.addEventListener('click', advinhar)
var num = 0 // número de palpites
var cpu = randInt(0, 10) // número sorteado pela cpu

function randInt(min, max){
    let num = Math.floor(Math.random() * (max-min+1)) + min
    return num
}

function advinhar(){
    var player = document.getElementById('player').value

    if (player == ''){
        alert('Erro: você não digitou escolheu um número!')

    }else if (player < 0){
        alert('Erro: digite apenas números positivos!')

    }else if( player > 10){
        alert('Erro: digite apenas números de 0 a 10!')

    }else{
        num++
        console.log(num, cpu)
       
        var txt = document.getElementById('resultado')

        if (cpu == player){
            txt.innerHTML = `\
            Você acertou! Número de tentativas: ${num}`
            num = 0 
            cpu = randInt(0, 10)

        }else if (player > cpu){
            txt.innerHTML = 'Você está frio'
            
        }else if (player < cpu){
            txt.innerHTML = 'Você está quente!'
            
        }
    }
}
// cuidado com a redeclaração de variável!!