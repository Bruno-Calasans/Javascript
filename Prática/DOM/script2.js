function mudarH1(){
    let h1 = document.getElementById('click')
    h1 = h1.style.backgroundColor = 'red'
}

function mudarCor(){
    h1s.style.backgroundColor = 'orange'
    h1s.innerHTML = 'Me segure'
}

function mudarTexto(){
    h1s.innerHTML = 'Me solta, poha'
}

function mudarTexto2(){
    h1s.innerHTML = 'Clique em mim'
}

function mudarTexto3(){
    h1s.innerHTML = 'Me segura logo'
}

var h1s = document.getElementById('click2')
h1s.onclick = mudarCor
h1s.onmousedown = mudarTexto
h1s.onmouseup = mudarTexto2


var h3 = document.getElementById('h3')
h3.addEventListener('click', mudarH3)
h3.addEventListener('mouseover', function(){
    h3.innerHTML = 'O mouse está sobre mim'}
)
h3.addEventListener('mouseleave', function(){
    h3.innerHTML = 'O mouse saiu de cima de mim'
})
function mudarH3(){
    h3.style.backgroundColor = 'blue'
}

var meuP = document.getElementById('elemento p')
var meuDiv = document.getElementById('elemento div')

meuP.addEventListener('click', function(){ minhaFunção(meuP); }, true)
meuDiv.addEventListener('click', function(){ minhaFunção(meuDiv); }, true)
function minhaFunção(objeto){
    objeto.style.backgroundColor = 'blue'
}
meuP.removeEventListener('click', minhaFunção)
