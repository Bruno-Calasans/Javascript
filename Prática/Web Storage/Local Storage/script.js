

    // objeto local storage
    window.localStorage // primeira forma
    localStorage // segunda forma

    // salvando dados no local storage
    localStorage.setItem('teste', true)

    // lendo dados do local storage a partir da chave
    let valor = localStorage.getItem('teste')
    console.log(valor); // retorna truecolor

    // lendo chave do local storage a partir do index
    let chave = localStorage.key(0)
    console.log(chave);

    // removendo dado a partir da chave
    localStorage.removeItem('teste')

    // removendo todos os dados do local storage
    localStorage.setItem('nome', 'teste')
    localStorage.setItem('idade', 30)
    localStorage.clear()

    // vai permanecer no browser indefinidamente
    localStorage.setItem('teste', false)

