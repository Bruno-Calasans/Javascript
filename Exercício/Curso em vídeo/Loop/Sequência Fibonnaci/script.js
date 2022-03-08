var submit = document.getElementById('submit')
submit.addEventListener('click', fibonnaci)

function fibonnaci(){
    var txt = document.getElementById('resultado')
    var n = document.getElementById('an').value
    var a1 = 0
    var a2 = 1
    var an = 1
    txt.innerHTML = ''
    txt.innerHTML = '0\u{1F449}1\u{1F449}'

    for (var cont = 2; cont < n; cont++){
        an = a1 + a2
        a1 = a2
        a2 = an
        txt.innerHTML += ` ${an}\u{1F449} `

    }
    txt.innerHTML += '\u{1F3C1}'

}