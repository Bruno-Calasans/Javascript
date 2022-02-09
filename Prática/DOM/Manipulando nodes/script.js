// Criando um elemento de parágrafo(p)
var element = document.createElement('p')

//Criando um text node
var text = document.createTextNode('exemplo de texto')

//Inserindo text node dentro de um element node
element.appendChild(text)

//Jogando o elemento criando dentro de body
document.body.appendChild(element) 

//movendo elementos com o método appendChild() 
var lista1 = document.getElementById('lista1')
var lista2 = document.getElementById('lista2')

lista1.appendChild(lista2.firstElementChild)

//Usando o método insetBefore()
li = document.createElement('li')
li.innerHTML = "Tesoura"
lista1.insertBefore(li, lista1.firstElementChild)

//Movendo com o método insertBefore()
lista1.insertBefore(lista2.firstElementChild, lista1.lastElementChild)

//Usando o método remove()
//lista1.remove()

//usando o método removeChild()
/*var listas = document.getElementById('listas')
listas.removeChild(listas.firstElementChild)
*/
/*var parent = lista1.parentNode
parent.removeChild(parent.firstElementChild)*/

//usando o método replaceChild()
var item = document.createElement('li')
item.innerHTML = "Prancheta"
lista1.replaceChild(item, lista1.firstElementChild)

//usando cloneNode()
var lista1Copy = lista1.childNodes[1].cloneNode(true)
lista2.appendChild(lista1Copy)

// copiando apenas element child de lista1
for (cont = 0; cont <= lista1.childNodes.length - 1; cont++){
    var item = lista1.childNodes[cont]
    
    if (item.nodeName != '#text'){
        var copy = item.cloneNode(true)
        lista2.appendChild(copy)
    }

}





