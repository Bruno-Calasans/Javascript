function tabuada(){
    var num = document.getElementById('num').value
    var tabuada = document.getElementById('tabuada')

    // Limpando o campo de tabuada
    tabuada.innerHTML = 'Tabuada'
    for (var cont = 1; cont <= 10; cont++){
        var opção =  document.createElement('option')
        opção.innerHTML = `${num} x ${cont} = ${num * cont}`
        tabuada.appendChild(opção)
    }
}