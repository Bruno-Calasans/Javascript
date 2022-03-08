var submit = document.getElementById('submit')
submit.addEventListener('click', maioridade)

var criar = document.getElementById('criar')
criar.addEventListener('click', criarInput)

var body = document.body
body.addEventListener('mousemove', liberarSubmit)

function criarInput(){
    var num = Number(document.getElementById('numPessoas').value)
    if (num == 0){
        alert('Erro: o campo não pode estar vazio!')

    }else{
        var pnasc = document.getElementById('nascimentos')
        pnasc.innerHTML = ''
        for (var cont = 1; cont <= num; cont++){
            var label = document.createElement('label')
            var input = document.createElement('input')
            label.innerHTML = `Nascimento da ${cont}ª pessoa:`
            input.type = 'date'
            input.id = `p${cont}`
            pnasc.appendChild(label); pnasc.appendChild(input)   
        }    
        
    }
}

function liberarSubmit(){
    var num = Number(document.getElementById('numPessoas').value)
    var p = document.getElementById('nascimentos')
    var lenP = p.childNodes.length

    // Verificando se tenho inputs no elemento p
    if (lenP > 1){

        // Verificando se tenho algum input vazio
        for (var cont = 1; cont <= num; cont++){
            var input = document.getElementById(`p${cont}`).value

            // Libera o botão submit se não tiver nenhum input vazio
            if ( input == ''){
                submit.disabled = true
                
            }else{
                submit.disabled = false
            }
        }
    }   
}   

function maioridade(){
    var num = Number(document.getElementById('numPessoas').value)
    var anoAtual = new Date().getFullYear()
    var maior = menor = 0; 
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''
    for (var cont = 1; cont <= num; cont++){
    
        var input = document.getElementById(`p${cont}`).value.slice(0, 4)
        if (anoAtual - input >= 18){
            ++maior
        }else{
            ++menor
        }

    }
    txt.innerHTML = `Maiores de idade: ${maior} <br> Menores de idade: ${menor}`

}
