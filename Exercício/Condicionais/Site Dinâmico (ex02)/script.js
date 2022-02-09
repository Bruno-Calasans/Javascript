function validar_dados(){
    var idade = document.getElementById("idade")
    var sexo = document.getElementsByName("gênero")
    var btn_enviar = document.getElementById("submit_button")
    
    if ((idade.value > 0 && idade.value <= 100) && (sexo[0].checked || sexo[1].checked)){
        btn_enviar.disabled = false
    }else{
        btn_enviar.disabled = true
    }

}


function analisar_idade(){

    var objIdade = document.getElementById("idade")
    var idade = objIdade.value
    var sexo = document.getElementsByName("gênero")
    var imgIdade = document.getElementById("imagem_idade")

    // Descobrindo o gênero
    if (sexo[0].checked){

        gênero = 'homem'
        if (idade <= 6){
            imgIdade.src = 'media\\baby boy.jpg'//bebê
            fase = 'bebê'
            
        }else if (idade <= 12){
            imgIdade.src = 'media\\kid boy.jpg'//criança
            fase = 'pirralho'

        }else if (idade <= 20){
            imgIdade.src = 'media\\teenager boy.jpg'//adolescente
            fase = 'adolescente'

        }else if (idade < 50){
            imgIdade.src = 'media\\adult man.jpg'//adulto
            fase = 'adulto'
        }else{
            imgIdade.src = 'media\\old man.jpg'//velho
            fase = 'velho'
        }

    }else{

        gênero = 'mulher'
        if (idade <= 6){
            imgIdade.src = 'media\\baby girl.jpg'//bebê
            fase = 'bebê'
            
        }else if (idade <= 12){
            imgIdade.src = 'media\\kid girl.jpg'//criança
            fase = 'pirralha'

        }else if (idade <= 18){
            imgIdade.src = 'media\\teenager girl.jpg'//adolescente
            fase = 'adolescente'

        }else if (idade < 50){
            imgIdade.src = 'media\\adult woman.jpg'//adulto
            fase = 'adulta'
        }else{
            imgIdade.src = 'media\\old woman.jpg'//velho
            fase = 'velha'
        }

    }
    // Alterando a mensagem de acordo
    var txtIdade = document.getElementById("txt_idade")
    txtIdade.innerText = `Você é um(a) ${fase} de ${idade} anos!`
    
}
