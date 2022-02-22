

    // pegando propriedades
    console.log($('#div1').css('background-color'))

    // modificando uma propriedade
    $('#div2').css('background', 'red')

    // mudando váris propriedades
    console.log($('#div3').css(
        {
        'background-color': 'green',
        'font-size': '2em',
        'height': '100px' 
        }
    ))
    

    // usando width() e height()
    $('#div4').width('100px')
    $('#div4').height('100px')

    $('#div5').css({'padding': '10px'})

    // usando innerWidth() e innerHeight()
    $('#div5').innerWidth('100px')
    $('#div5').innerHeight('100px')

    $('#div6').css({'padding': '10px', 
    'border': '5px solid black'})

    // usando outerWidth() e outerHeight()
    $('#div6').outerWidth('100px')
    $('#div6').outerHeight('100px')

    $('#div7').css(
        {
        'padding': '10px',
        'border': '5px solid black',
        'margin': '10px'
        }
    )

    // usando outerWidth(true) e outerHeight(true)
    $('#div7').outerWidth('200px', true)
    $('#div7').outerHeight('200px', true)

    