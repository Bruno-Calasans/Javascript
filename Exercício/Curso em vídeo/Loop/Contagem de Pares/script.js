function contarPares(){
    var start = Number(document.getElementById('num_inicial').value)
    var end = Number(document.getElementById('num_final').value)

    if (start == 0 && end == 0){
        alert('Erro: você não digitou nenhum número!')

    }else{

        if (start == 0){
            alert('Aviso: como você não digitou o número inicial, ele será considerado como zero(0)!')
            start = 0
        }

        var contagemTxt = document.getElementById('contagem_txt')
        contagemTxt.innerHTML = 'Contando...'

        // Contagem crescente
        if (start < end){

            for (start; start <= end; start++){
                var par = (start % 2 == 0)? start:' '
                contagemTxt.innerHTML += par
            }
        
        // Contagem decrescente
        }else{

            for (start; start >= end; start--){
                var par = (start % 2 == 0)? start:'\u{1F449}'
                contagemTxt.innerHTML += par
            }
            
        }
        // Mensagem final (bandeira)
        contagemTxt.innerHTML += '\u{1F3C1}'
    }  

        
}