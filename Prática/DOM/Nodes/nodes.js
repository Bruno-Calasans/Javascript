//Navegando através dos nodes

var cab = document.getElementById('cab')//exemplo 1

var cabParent = cab.parentNode
/*pegando o parent node do node com id cab*/

var cabParentElement = cab.parentElement
/*pegando o element node parent do node com id cab*/ 

var cabFirstChild = cab.firstChild
/*pegando o primeiro child do node com id cab*/

var cabFirstElementChild = cab.firstElementChild
/*pegando o primeiro element child do node com id cab*/

var cabLastChild = cab.lastChild
/*pegando o último child node do node com id cab*/

var cabLastElementChild = cab.lastElementChild
/*pegando o último element child do node com id cab*/

//------------------------------------------------------------------------------
var sub = document.getElementById('sub')//Exemplo 2

var subNextSibling =sub.nextSibling
/*pegando o próximo sibling node do node com id sub*/

var subNextElementSibling =sub.nextElementSibling
/*pegando o próximo element sibling do node com id sub/*/

var subPreviousSibling =sub.previousSibling
/*pegando o sibling node anterior do node com id sub*/

var subPreviousElementSibling =sub.previousElementSibling
/*pegando o element sibling anterior do node com id sub*/

//Usando nodeName---------------------------------------------------------------
var tagName = sub.nodeName//element node = retorna o nome da tag
var document = document

//Usando nodeValue
var div = document.getElementById('div1')//element node

var elementNode = div// ellement node
var textNode  = div.firstChild//text node
var attributeNode = div//attribute node

var elementNodeValue = elementNode.nodeValue//nodeValue de um element node
var textNodeValue = textNode.nodeValue//nodeValue de um text node
var attributeNodevalue = attributeNode.nodeValue//nodeValue de um attribute node

console.log(elementNodeValue, textNodeValue, attributeNode)

//Usando nodeType---------------------------------------------------------------
var div2 = document.getElementById('div2')

var elementNode = div2
var textNode = div2.firstChild
var commentNode = div2.childNodes[1]
var documentNode = document
var docTypeNode = document.doctype

var elementType = elementNode.nodeType
var textType = textNode.nodeType
var commentType = commentNode.nodeType
var documentType = documentNode.nodeType

console.log(elementType, textType, commentType, documentType)


//usando childNodes