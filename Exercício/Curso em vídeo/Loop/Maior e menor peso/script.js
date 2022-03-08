var submit = document.getElementById('submit')
submit.addEventListener('click', analisarPeso)

function analisarPeso(){
    
    var menor = maior = 0
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''

    for(var cont = 1; cont <= 5; cont++){
        var input = Number(document.getElementById(`n${cont}`).value)

        if (input == 0){
            alert('Erro: todos os campos devem ser preenchidos!')
            txt.innerHTML = ''
            break

        }else{

            menor = cont == 1 ? input: menor;
            maior = input > maior ? input : maior;
            menor = input < menor ? input : menor;
            
        }
            
    }
    txt.innerHTML = `\
    Maior peso: ${maior} <br>
    Menor peso: ${menor}
    `
}
