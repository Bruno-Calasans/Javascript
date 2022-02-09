// Exemplo 2
var nacionalidade = document.querySelector('input#txt')
var button = document.getElementById('sbm')
button.addEventListener('click', nacTeste)


function nacTeste(){
    var nac = nacionalidade.value.trim().toLowerCase()
    var div1 = document.getElementById('div1')
    
    if (nac == 'brasil'){
        div1.innerHTML = 'Você é brasileiro!'
    }else{
        div1.innerHTML = 'Você é estrangeiro!'
    }
}

