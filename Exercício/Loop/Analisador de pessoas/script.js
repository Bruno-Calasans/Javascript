var submit = document.getElementById('submit')
submit.addEventListener('click', analisarPessoas)

function analisarPessoas(){

    var velho = novo = somaIdade = homem = mulher = 0; 
    var pessoVelha = pessoaNova = '';

    for (var cont = 1; cont <= 4; cont++){
        var nome = document.getElementById(`nome${cont}`).value
        var idade = Number(document.getElementById(`idade${cont}`).value)
        var sexo = document.getElementById(`sexo${cont}`).value
        
        //console.log(nome, idade, sexo)

        if (nome == '' || idade == ''){
            alert('Erro: todos os campos devem ser preenchidos!')
            break

        }else if(idade < 0){
            alert('Erro: idade deve ser um valor positivo!')
            break

        }else{
            somaIdade += idade
            console.log(somaIdade)
            // Descobrindo o número de homens e mulheres
            if (sexo == 'm'){
                homem++
            }else{
                mulher++
            }

            // Pegando os dados da pessoa mais nova
            if (cont == 1){
                novo = idade
                pessoaNova = nome
            }
            if (idade < novo){
                novo = idade
                pessoaNova = nome
            }

            // Pegando dados da pessoa mais velha
            if (idade > velho){
                velho = idade
                pessoVelha = nome
            }
            
        }
    }
    var media = somaIdade/4
    var txt = document.getElementById('resultado')
    txt.innerHTML = ''
    txt.innerHTML = `Média de idade das pessoas: <strong>${media}</strong> <br>
    Pessoa mais velha:  <strong>${pessoVelha}(${velho})</strong> <br>
    Pessoa mais nova: <strong>${pessoaNova}(${novo})</strong> <br>
    Número de Homens: <strong>${homem}</strong> <br>
    Número de mulheres: <strong>${mulher}</strong>`
   
}