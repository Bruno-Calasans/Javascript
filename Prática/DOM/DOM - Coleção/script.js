//Usando childNodes
var div1 = document.getElementById('div1')
console.log(div1.childNodes)

//usando index em childNodes
console.log(div1.childNodes[1])

//usando children
console.log(div1.children)

//usando index em children
console.log(div1.children[0])

//usando id em children
console.log(div1.children['p1'])

//usando name em children
console.log(div1.children['tit'])

//método getElementsByTagName()
var tagName = document.getElementsByTagName('div')
console.log(tagName)

//método getElementsByClassName()
var className = document.getElementsByClassName('myDivs')
console.log(className)

//método querrySelectorAll()
var querry = document.querySelectorAll('.myDivs')
console.log(querry)
