var a = 10

//para acessar o conteúdo de uma tag
//esse método de document retorna um objeto
var tagh1 = document.getElementsByTagName('h1')[0]
var tagh2 = document.getElementsByTagName('h2')[0]
var corpo = document.body

document.write(`O que está dentro da tag h1: ${tagh1.innerText}`)
document.write('<br> <hr>')
document.writeln(`O que está dentro da tag h2: ${tagh2.innerHTML}`)
//innerText = retorna apenas o texto sem formatação
//innerHTML = retorna o texto formatado

//Posso mudar o estilo daquele elemento
//tagh1.style.background='green'
tagh1.style.display='none'//oculta o elemento



//Acessando uma div
var div_nome = document.getElementById('teste')
document.write('<br> <hr>')
document.write(`O que está dentro da div: ${div_nome.innerHTML}`)

//Acessando por nome caso tenha vários com o mesmo nome
var div_nomes = document.getElementsByName('teste')[0]
document.write('<br> <hr>')
document.write(`O que está dentro da div: ${div_nome.innerHTML}`)


//Acessando por classe
//esse método cria um coleção. Para acessar, é
//preciso fornecar a posição do elemento
document.write('<br> <hr>')
document.write(document.getElementsByClassName('objeto')[0].innerText)

//Querry selector
// bom para lidar com classe e id ao mesmo tempo
document.write('<br> <hr>')
document.write(document.querySelector('h2#documento').innerText)