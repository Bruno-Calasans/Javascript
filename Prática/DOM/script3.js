// Pegando os elementos
var n1 = document.getElementById('entry1')
var n2 = document.getElementById('entry2')
var bt = document.getElementById('button')


// Adicionando Event listeners
bt.addEventListener('click', somar)

// Event Handler
function somar(){
    let rst = document.getElementById('rst')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    rst.innerHTML = `<strong>A soma entre ${n1} e ${n2} vale ${n1+n2}</strong>`
}