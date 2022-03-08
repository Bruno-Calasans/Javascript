function tabuada(){
    var num = Number(document.getElementById('num').value)
    var tabuada = document.getElementById('tabuada')

    if (num == 0){
        alert('Por favor, digite um valor!')

    }else{

        // limpando a tabuada - primeira forma
        /*var tamanhoTabuada = tabuada.childNodes.length
        for (var i = 1; i <= tamanhoTabuada; i++){
            var lista = tabuada.childNodes
            tabuada.removeChild(lista[0])
        }*/

        // limpando a tabuada - segunda forma
        tabuada.innerHTML = ''
        
        // fazendo a tabuada
        for (var cont = 1; cont <= 10; cont++){
            var option = document.createElement('option')
            option.value = `${cont}`
            tabuada.appendChild(option)
            option.innerHTML = `${num} x ${cont} = ${num * cont}`
        }

    }
}