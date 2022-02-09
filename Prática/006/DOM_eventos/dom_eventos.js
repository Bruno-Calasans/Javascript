//Definindo as funções que irão acontecer
//nos eventos sem um seletor

var div_1 = document.getElementById('div1')

function clicar(objeto) {
    objeto.innerText='Você é um arrombado'
    objeto.style.background='red'
}

function mover(objeto) {
    objeto.innerText='Passe a mão em mim'
    objeto.style.background='orange'
}

function sair(objeto) {
    objeto.innerText='TESTANDO'
    objeto.style.background='black'
}

//Também pode adicionar um event-listener,
//que fica no arquivo js, diminuindo o código HTML
//os eventos na forma de string são diferentes
//dos eventos em forma de parâmetro
var div_2 = document.getElementById('div2')

function teste(){
    div_2.innerText='Eu só estava testando'
}

function mover2(){
    div_2.innerText='Volte aqui'
}
div_2.addEventListener('click', teste)
div_2.addEventListener('mouseout', mover2)

//Eventos também são atributos.
//Outra forma seria utilizando o atributo do
//elemento que quremos modificar
var div_3 = document.getElementById('div3')

function teste2(){
    div_3.innerText='Vaza'
}

div_3.onclick = teste2//acessando o atributo onclick




