function palíndromo(){
    var palavra = document.getElementById('palavra').value.trim()

    // Removendo todos os espaços
    while (palavra.search(' ') != -1){
        palavra = palavra.replace(' ', '')
    }

    if (palavra == ''){
        alert('Erro: pro favor, digite alguma coisa!')

    }else{
        var n = palavra.length
        var inverso = inverso2 = ''
       for (var cont = -1; cont >= -n; --cont){
           inverso += palavra.substr(cont, 1) 
       }
       
       // Escrevendo a mensagem
       var txt = document.getElementById('resultado')
       txt.innerHTML = `Inverso: ${inverso} <br>`

       // Comparando o inverso com a palavra
       if (inverso == palavra){
            txt.innerHTML += `${palavra} é um palídromo!`

       }else{
            txt.innerHTML += `${palavra} não é um palídromo!`
       }
       
    }
    
}