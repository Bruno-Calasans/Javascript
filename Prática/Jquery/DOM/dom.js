
// exemplo de um jquery
$('#teste1').click(
    () => {

        if($('#p1').css('display') == 'none'){
            $('#p1').show()

        }else{
            $('#p1').hide()
        }
    })

// pegando valores--------------------------------------

// usando text()
console.log($('#p2').text())


// usando html()
console.log($('#p3').html())

// usando val()
$('#teste2').click(()=>{

    $('#p4').text($('#inputExemplo1').val())
})

// usando href
console.log($('#link1').attr('href'))


// modificando os valores--------------------------------------

// usando text()
$('#p2').text('modificado com text()')

// usando html()
$('#p3').html('<i>modificado com html()</i>')

// usando o val()
$('#inputExemplo1').val('modificado com o val()')

// usando o attr
$('#link1').attr('href', 'http://www.google.com')

// usando o attr() com mais de um atributo
$('#link1').attr({
    'href':'http://www.google.com',
    'name': 'novoLink1',
    'target': '_blank'})
    
// usando callback--------------------------------------

// inserindo conteúdo --------------------------------------

// usando o append()
$('#p5').append('teste')

// usando o after()
$('#p6').after('teste')

// criando elementos
let span1 = document.createElement('span')
let span2 = document.createElement('span')
span1.innerHTML = 'Sou o span1'
span2.innerHTML = 'Sou o span2'
// usando o append() - inserindo elementos
$('#p7').append(span1, span2)


// criando elementos
let p1 = document.createElement('p')
let p2 = document.createElement('p')
p1.innerHTML = 'Sou o p1'
p2.innerHTML = 'Sou o p2'
// usando o after() - inserindo elementos
$('#p8').after(p1, p2)


// usando o prepend()
$('#p9').prepend('teste')

// usando o before
$('#p10').before('teste')

// criando elementos
let b1 = document.createElement('span')
let b2 = document.createElement('span')
b1.innerHTML = 'Sou o b1'
b2.innerHTML = 'Sou o b2'
// usando prepend() - inserindo elementos
$('#p11').prepend(b1, b2)

// criando elementos
let div1 = document.createElement('div')
let div2 = document.createElement('div')
div1.innerHTML = 'Sou a div1'
div2.innerHTML = 'Sou a div2'
// usando o before - inserindo elementos
$('#p12').before(div1, div2)



// removendo elementos --------------------------------------

// usando remove
$('#teste3').click(()=>{
    $('#divRemove').remove()
})

// usando empty
$('#teste4').click(()=>{
    $('#divEmpty').empty()
})

// removendo vários elementos de uma mesma classe de uma só vez
$('#btn5').click(()=>{
    $('p').remove('.teste')
})

// removendo vários elementos de várias classe de uma vez
$('#btn6').click(()=>{
    $('p').remove('.teste, .teste2')
})


