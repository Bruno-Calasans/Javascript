// Exemplo 1
var velocidade = document.getElementById('vel')
var bt = document.getElementById('submit')
bt.addEventListener('click', calcularVel)

function calcularVel(){
    var vel = Number(velocidade.value)
    var rst = document.querySelector('#rst')
    if (vel > 60){
       rst.innerHTML = 'Você foi multado!'

    }else{
        rst.innerHTML = 'Você não foi multado.'
    }  
    
}
