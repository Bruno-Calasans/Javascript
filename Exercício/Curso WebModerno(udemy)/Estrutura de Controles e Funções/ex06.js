

function jurosSimples(capInicial = 0, taxa=1, tempo=1){
    const  juros = capInicial * (taxa/100) * tempo
    const montante = capInicial + juros
    console.log('R$'+montante.toFixed(2))
}

function jurosCompostos(capInicial = 0, taxa=1, tempo=2){
    const montante = capInicial * (1 + taxa/100) ** tempo
    console.log('R$'+montante.toFixed(2))
}

jurosSimples(1200, 2, 15)
jurosCompostos(1400, 7, 2)