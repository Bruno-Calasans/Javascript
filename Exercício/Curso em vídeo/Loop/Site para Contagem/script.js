function contar(){
    var start = document.getElementById('início').value
    var end = document.getElementById('fim').value
    var passo = Number(document.getElementById('passo').value)
    var contMsg = document.getElementById('contagem_txt')
    
    
    // Validando a contagem
    if (start == '' && end == ''){
        alert('Erro na contagem: você não definiu o início e fim!')
    }
    else if (start == ''){
        alert('Erro na contagem: você não definiu o início!')

    }else if (end == ''){
        alert('Erro na contagem: você não definiu o fim!')
        
    }else if (start == end){
        alert('Erro na contagem: não foi possível contar pois o início é igual ao fim!')

    }else{
        // Validando o passo
        if (passo == 0){
            alert('Aviso: você não colocou o passo, então ele será considerado como 1!')
            passo = 1
        }
        // Transformando o início e fim em números
        start = Number(start)
        end = Number(end)
        contMsg.innerHTML = '' // limpando o texto inicial

        // Fazendo a contagem em si
        if (start < end){ // contagem crescente
            for (start; start <= end; start += passo){
                contMsg.innerHTML += `${start}\u{1F449}`
            }

        }else if (start > end){ // contagem decrescente
            for (start; start >= end; start -= passo){
                contMsg.innerHTML += `${start}\u{1F449}`
        }
        
       }contMsg.innerHTML += `\u{1F3C1}`//mensagem final da bandeirinha
    }
}  