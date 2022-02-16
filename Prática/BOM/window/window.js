
var altura = document.getElementById('altura');
var largura = document.getElementById('largura');

// object window

// atributos innerHeight e innnerWidth
altura.innerHTML = window.innerHeight
largura.innerHTML = window.innerWidth

// atributos outerHeight e outerWidth
var altura = document.getElementById('alturaOut');
var largura = document.getElementById('larguraOut');

alturaOut.innerHTML = window.outerHeight
larguraOut.innerHTML = window.outerWidth

// método open()
//open() // sem nenhum argumento

//open('', '', 'width=200px,height=200px') // usando configs

//open('http://www.google.com/') // usando url

// método close()
/*var minhaJanela = open('', 'minhaJanela', 'width=200px,height=200px');
minhaJanela.close()*/

// método moveTo()
/*var minhaJanela = open('', 'minhaJanela', 'width=200px,height=200px');
minhaJanela.moveTo(200, 200)*/

// método moveBy()
/*var minhaJanela = open('', 'minhaJanela', 'width=200px,height=200px');
minhaJanela.moveTo(200, 200); // posição atual
minhaJanela.moveBy(300, 100) // nova posição*/

// método risezeTo()
/*var minhaJanela = open('', 'minhaJanela', 'width=200px,height=200px');
minhaJanela.resizeTo(300, 300) // novas dimensões*/

// método risezeTo()
/*var minhaJanela = open('', 'minhaJanela', 'width=200px,height=200px');
minhaJanela.resizeTo(300, 300) // dimensões atuais
minhaJanela.resizeBy(100, 100)  // acréscimo de dimensões
console.log(minhaJanela.outerWidth, minhaJanela.outerHeight)*/

// método scrollTo()

function scrollBarra(){
    scrollTo(200, 300)
}

function scrollBarraBy(){
    scrollBy(200, 300)
}

console.log(scrollX, scrollY) // primeira possibilidade
console.log(pageXOffset, pageYOffset) // segunda possibilidade

// usando setInterval()
var id = setInterval(mostrarMsg, 1000)

function mostrarMsg(){
    var msgs = document.getElementById('msgs')
    msgs.innerHTML += 'HELLO <br>'
}

function pararMsgs(){
    clearInterval(id)

}

// usando setTimeOut()
var id2 = setTimeout(mostrarMsgTimeOut, 3000)

function mostrarMsgTimeOut(){
    var msgs = document.getElementById('msgs2')
    msgs.innerHTML += 'HELLO <br>'
}

function pararMsgsTimeOut(){
    clearTimeout(id2)

}

