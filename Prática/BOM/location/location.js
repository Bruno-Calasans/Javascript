

    // objeto location
    let link = document.getElementById('link')

    // usando o location.hash
    link.hash = 'novo' // mudando a  âncora de um link
    console.log(link.hash) // pegando a âncora de um link

    //location.hash = 'teste' // mudando a âncora da página
    console.log(location.hash) // pegando a âncora da URL da página atual

    // usando o location.hostname
    console.log(location.host) // retorna o domínio ou ip e a porta

    // usando o location.hostname
    console.log(location.hostname) // retorna o ip ou domínio da url atual

    // usando o location.port
    console.log(location.port) // retorna o número da porta da url atual

    // usando o location.href
    //location.href = 'pag2.html' // modificando a url
    console.log(location.href) // retorna a url inteira

    // usando o location.origin
    console.log(location.origin) // retorna protocolo, domínio ou ip e porta

    // usando o location.pathname
    console.log(location.pathname) // retorna o nome do caminho da url atual

    // usando o search
    let linkQuery = document.getElementById('linkQuery')
    //linkQuery.search = 'idade=90' // mudando a querystring de linkQuery
    console.log(linkQuery.search) // querystring de linkQuery

    // usando o assign()
    let assignBtn = document.getElementById('assignBtn')
    assignBtn.onclick = function(){

        location.assign('https://www.google.com')
    }

    // usando o assign()
    let replaceBtn = document.getElementById('replaceBtn')
    replaceBtn.onclick = function(){

        location.replace('https://www.google.com')
    }

    // usando o location.reload()
    let reloadBtn = document.getElementById('reloadBtn')
    reloadBtn.onclick = function(){

        location.reload()
    }



