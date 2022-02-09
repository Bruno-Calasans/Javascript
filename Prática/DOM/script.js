var h1 = document.getElementById('teste')
// antes
console.log(h1.innerHTML)

h1.innerHTML = 'Mudei o conteúdo html'
// depois
console.log(h1.innerHTML)


var p = document.getElementsByTagName('p')
console.log(p[1].className)
p[1].className = 'pp'
console.log(p[1].className)

var pp = document.getElementsByClassName('pp')
console.log(pp)

var h1q = document.querySelector('p.pp')
console.log(h1q)

var pps = document.querySelectorAll('.pp')
console.log(pps)

h1.style.color = 'blue'

